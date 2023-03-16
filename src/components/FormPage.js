import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Counter from "./Counter";

import {
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardText,
  Button,
  FormFeedback,
} from "reactstrap";
import "./css/FormPage.css";

const FormPage = () => {

  const [orderPizza, setOrderPizza] = useState({
    id: 1,
    name: "Position Absolute Acı Pizza",
    price: 85.50,
    size: "",
    dough: "",
    text: "",
    count: 1,
    choices: "",
    totalPrice: "",
    extraIng: "",
    comment: "Frontend Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
  });

  const [formErrors, setFormErrors] = useState({
    id: "",
    name: "",
    price: "",
    size: "",
    dough: "",
    text: "",
    count: "",
    choices: "",
    totalPrice: "",
    extraIng: "",
    comment: ""
  });

  const ingredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Salam",
    "Ananas",
    "Kabak"
  ];

  const [counter, setCounter] = useState(1);
  const [ingCount, setIngCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(orderPizza.price);
  const lastPrice = totalPrice * counter;
  const [extraIng, setExtraIng] = useState([]);
  const [disableButton, setDisableButton] = useState(true);

  const perCost = 5;

  const orderFormSchema = Yup.object().shape({
    size: Yup.string().required("Pizza boyutunu seçmeniz gerekmektedir."),
    dough: Yup.string().required("Pizza hamurunu seçmeniz gerekmektedir."),
    extraIng: Yup.array().required().min(4, "En az 4 adet malzeme seçimi yapmanız gerekmektedir."),
    text: Yup.string().required("Sipariş notu eklemeniz gerekmektedir.")
  });

  const setCheck = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.checked });

    if (e.target.checked === true) {
      setExtraIng([...extraIng, e.target.name]);
      setIngCount(ingCount + 1);
      setTotalPrice(totalPrice + perCost);
    } else {
      setIngCount(ingCount - 1);
      setTotalPrice(totalPrice - perCost);
    }
  };

  const changeHandler = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.value });

    Yup.reach(orderFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [e.target.name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] });
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="Form">
      <div className="FormHeader">
        <h1><Link style={{ textDecoration: "none", color: "white" }} to="/">Teknolojik Yemekler</Link></h1>

        <div className="littleContainer">
          <img
            alt="pizza"
            src={require("../Assets/esnek/esnek-form-banner.png")}
          />
          <p className="pizzaLink">
            <Link style={{ textDecoration: "none", color: "#5F5F5F" }} to="/">Anasayfa</Link> - Seçenekler - <Link style={{ textDecoration: "none", color: "#CE2829", fontWeight: "bolder" }} to="/pizza">Sipariş Oluştur</Link>
          </p>
          <h3>{orderPizza.name}</h3>
        </div>

        <div className="PriceAndNumbers">
          <div className="Price">
            <p>{orderPizza.price}₺</p>
          </div>
          <div className="Numbers">
            <p>4.9 (200)</p>
          </div>
        </div>

        <div className="Text">
          <p>
            {orderPizza.comment}
          </p>
        </div>
      </div>

      <div className="FormContent">
        <Form onSubmit={submitHandler}>
          <FormGroup className="d-flex p-3 bd-highlight justify-content-center d-grid gap-2 ">
            <FormGroup
              className="shadow-sm p-3 mb-1 bg-body rounded "
              tag="fieldset"
              id="size-dropdown"
              invalid={formErrors.size}
              style={{ width: "10%" }}
            >
              <strong>Boyut Seç</strong>

              <FormGroup check>
                <Input
                  name="size"
                  type="radio"
                  id="size-dropdown"
                  value="Küçük"
                  onChange={changeHandler}
                />{" "}
                <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="size"
                  type="radio"
                  id="size-dropdown"
                  value="Orta"
                  onChange={changeHandler}
                />{" "}
                <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="size"
                  type="radio"
                  id="size-dropdown"
                  value="Büyük"
                  onChange={changeHandler}
                />{" "}
                <Label check>Büyük</Label>
              </FormGroup>
              <FormFeedback>{formErrors.size}</FormFeedback>
            </FormGroup>

            <UncontrolledDropdown
              className="shadow-sm p-2 mb-1 bg-body rounded"
              style={{ width: "18%", height: "30%" }}
            >
              <DropdownToggle caret color="ligth">
                <strong>Hamur Seç</strong>
              </DropdownToggle>
              <DropdownMenu ligth>
                <DropdownItem header id="hamur-type">
                  Hamur Kalınlığı
                </DropdownItem>

                <DropdownItem
                  name="dough"
                  value="İnce"
                  id="dough-type"
                  onClick={changeHandler}
                >
                  İnce Hamur
                </DropdownItem>
                <DropdownItem
                  name="dough"
                  value="Orta"
                  id="dough-type"
                  onClick={changeHandler}
                >
                  Orta Hamur
                </DropdownItem>
                <DropdownItem
                  name="dough"
                  value="Kalın"
                  id="dough-type"
                  onClick={changeHandler}
                >
                  Kalın Hamur
                </DropdownItem>
              </DropdownMenu>
              <br></br>
              <p>
                {" "}
                <strong>{orderPizza.dough}</strong>
              </p>
            </UncontrolledDropdown>
          </FormGroup>

          <FormGroup className="shadow-sm p-3 mb-1 bg-body rounded">
            <div className="ekMalzemeler">
              <h4>Ek Malzemeler</h4>
            </div>
            <div className="aciklama">
              <p>
                En az 4 malzeme seçimi yapmanız gerekmektedir.
              </p>
              <p>
                Eklemek istediğiniz malzeme başına 5₺ olacak şekilde toplam ücrete eklenecektir.
              </p>
            </div>

            <div className="malzemeler">
              <FormFeedback>{formErrors.extraIng}</FormFeedback>
              {ingredients.map((e, index) => {
                return (
                  <FormGroup check inline>
                    <Input
                      type="checkbox"
                      name={e}
                      key={index}
                      onChange={setCheck}
                    />
                    <Label check>{e}</Label>
                  </FormGroup>
                );
              })}
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="special-text">Sipariş Notu</Label>
            <div className="siparis">
              <Input
                id="special-text"
                name="text"
                type="textarea"
                placeholder="Siparişine eklemek istediğin not var mı?"
                onChange={changeHandler}
                invalid={formErrors.text}
                style={{ width: "44%", height: "40%" }}
              />
              <div className="geriBildirim">
                <FormFeedback>{formErrors.text}</FormFeedback>
              </div>
            </div>
          </FormGroup>

          <FormGroup className="d-flex-d">
            <div className="sayac">
              <Counter counter={setCounter} />
            </div>
            <div className="siparisFinal">
              <Card
                body
                className="my-2"
                style={{
                  width: "20rem",
                }}
              >

                <div className="baslik">
                  <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                </div>
                <div className="baslikDetay">
                  <CardText>
                    Seçimler: {ingCount * perCost} ₺
                    <br></br>
                    <span>Toplam: {lastPrice} ₺ </span>
                  </CardText>
                </div>
                <a href="/approval">
                  <Button id="order-button" type="submit" color="warning" disabled={disableButton}>
                    SİPARİŞ VER
                  </Button>
                </a>
              </Card>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div >
  );
};

export default FormPage;
