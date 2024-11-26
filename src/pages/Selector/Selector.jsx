import React, { useState, useEffect, useRef } from "react";
import styles from "./Selector.module.css";
import CustomerFormModal from "../CustomerModal/CustomerModal";
import ChannelPartner from "../ChannelPartner/ChannelPartner";
import BusinessForm from "../BusinessModal/BusinessForm";
import Logo from "../../assets/Logo/logomannethabg.png";
import { Link } from 'react-router-dom';

function Selector() {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showChannelPartner, setShowChannelPartner] = useState(false);

  const customerModalRef = useRef(null);
  const businessModalRef = useRef(null);
  const channelPartnerRef = useRef(null);

  const toggleModal = (type) => {
    setShowCustomerModal(type === "customer");
    setShowBusinessModal(type === "business");
    setShowChannelPartner(type === "partner");
  };

  const closeModal = () => {
    setShowCustomerModal(false);
    setShowBusinessModal(false);
    setShowChannelPartner(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        customerModalRef.current &&
        !customerModalRef.current.contains(event.target)
      ) {
        closeModal();
      }
      if (
        businessModalRef.current &&
        !businessModalRef.current.contains(event.target)
      ) {
        closeModal();
      }
      if (
        channelPartnerRef.current &&
        !channelPartnerRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    if (showCustomerModal || showBusinessModal || showChannelPartner) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCustomerModal, showBusinessModal, showChannelPartner]);

  const renderButton = (label, description, buttonLabel, onClick, additionalClass = "") => (
    <button className={`${styles.button} ${additionalClass}`} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.actionButton}>{buttonLabel}</span>
    </button>
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="#">
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>

        {renderButton(
          "𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 HOME SEEKER!",
          "Whose problem is finding a GOOD HOME at a GOOD LOCATION, at a GOOD PRICE, with a GOOD DEVELOPER.",
          "Find Your Home!",
          () => toggleModal("customer"),
          styles.customer // Add this line
        )}

        {renderButton(
          "𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 BUILDER/DEVELOPER!",
          "Struggling to hire skilled Sales Professionals, Training & Upskilling, Marketing & Sales, click now for a FREE CONSULTATION.",
          "Schedule a Call!",
          () => toggleModal("business"),
          styles.business // Add this line
        )}

        {renderButton(
          "𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 CHANNEL PARTNER!",
          "AGENT, BROKER, BANKER or VENDOR click to provide details and connect.",
          "Enroll Now!",
          () => toggleModal("partner"),
          styles.channelPartner // Add this line
        )}

       

        {(showCustomerModal || showBusinessModal || showChannelPartner) && (
          <div className={styles.backdrop}></div>
        )}

        {showCustomerModal && (
          <div ref={customerModalRef}>
            <CustomerFormModal onClose={closeModal} />
          </div>
        )}
        {showBusinessModal && (
          <div ref={businessModalRef}>
            <BusinessForm onClose={closeModal} />
          </div>
        )}
        {showChannelPartner && (
          <div ref={channelPartnerRef}>
            <ChannelPartner onClose={closeModal} />
          </div>
        )}
      </div>
      <div>
          <Link to="/home" className={styles.skipButton}>
            <button className={styles.skipButtonStyle}>Go To Projects</button>
          </Link>
        </div>
    </>
  );
}

export default Selector;
