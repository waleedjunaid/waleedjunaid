import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import classes from "./AddPaymentModal.module.css";
import { IoClose } from "react-icons/io5";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { Post } from "../../Axios/AxiosFunctions";
import { apiHeader } from "./../../config/apiUrl";
import { useSelector } from "react-redux";

const AddPaymentModal = ({
  // attachPMApiUrl,
  // getPaymentMethodList,
  AddCard,
  AddCardLoading,
  ...props
}) => {
  // const stripe = useStripe();
  //  const elements = useElements();
  // const [isAddingCard, setIsAddingCard] = useState(false);
  // const accessToken = useSelector((state) => state.authReducer.access_token);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: cardElement,
  //   });

  //   if (error) {
  //     toast.error(error.message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //     return;
  //   } else {
  //     addCardToDB(paymentMethod?.id);
  //   }
  // };

  // // add card to DB
  // async function addCardToDB(attachResponse) {
  //   setIsAddingCard(true);
  //   const response = await Post(
  //     attachPMApiUrl,
  //     { pmId: attachResponse },
  //     apiHeader(accessToken)
  //   );
  //   if (response !== undefined) {
  //     await getPaymentMethodList();
  //     toast.success("Card added successfully", { position: "top-right" });
  //     setIsAddingCard(false);
  //     props.onHide();
  //   }
  // }
  return (
    <>
      <style jsx>
        {`
          .modal-content {
            width: 80%;
            border-radius: 20px;
            margin: auto;
          }
          @media (max-width: 768px) {
            .modal-content {
              width: 95%;
              margin: auto;
            }
          }
        `}
      </style>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={`${classes?.modal_main}`}>
            <div className={`${classes?.modal_header}`}>
              <h4>Add your Card</h4>
              <IoClose
                size={24}
                onClick={() => props.onHide()}
                className={`${classes?.modal_closeIcon}`}
              />
            </div>
            <form
              onSubmit={(e) => {
                // handleSubmit(e);
                AddCard(e);
                props.onHide();
              }}
            >
              <div className={`${classes?.field_box}`}>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                    hidePostalCode: true,
                  }}
                />
              </div>
              <button
                disabled={AddCardLoading}
                className={`${classes?.pay_btn}`}
                type="submit"
              >
                {AddCardLoading ? "Adding..." : "Confirm"}
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default AddPaymentModal;
