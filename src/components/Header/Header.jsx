import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserItem } from "../../controllers/userController";
import { bagActions } from "../../store/bagSlice";
import { userActions } from "../../store/userSlice";
import logo from "../../../public/assets/logo.avif"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const email = useSelector((store) => store.user.email);

 useEffect(() => {
  setTimeout(async () => {
    const data = await getUserItem();
    dispatch(bagActions.addItemToBag(data));
    console.log(data)
  }, 500);
}, [email]);

  dispatch(userActions.setUserState(localStorage.getItem("email")));

  const bag = useSelector((store) => store.bag);


  const handleLogout = () => {
    if (confirm("Confirm Logout")) {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      dispatch(userActions.setUserState(null));
      dispatch(bagActions.clearCart())
      navigate("/login");
    }
  };

  const handleStyleForNavLink = (obj) => {
    if (obj.isActive === true) {
      return {
        borderBottom: "2px solid black",
      };
    }
  };

  const checkBagLength = bag.length !== 0 && bag.length;

  return (
    <header className={styles.header}>
      <NavLink to="/" className={`${styles.leftSection} nav-links`}>
        <div>
          <img src={logo} width="130" alt="logo" />
        </div>
        <h3>CLOTHING</h3>
      </NavLink>

      <div className={styles.rightSection}>
        <NavLink
          className="nav-links"
          style={(obj) => {
            return handleStyleForNavLink(obj);
          }}
          to="/men"
        >
          Men
        </NavLink>

        <NavLink
          className="nav-links"
          style={(obj) => {
            return handleStyleForNavLink(obj);
          }}
          to="/women"
        >
          Women
        </NavLink>

        <NavLink
          className="nav-links"
          style={(obj) => {
            return handleStyleForNavLink(obj);
          }}
          to="/kids"
        >
          Kids
        </NavLink>

        {email !== null ? (
          <div
            className="dropdown"
            style={{
              width: "190px",
              backgroundColor: "grey",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: "20%", backgroundColor: "grey" }}
            >
              {email}
            </button>
            <ul className="dropdown-menu">
              <NavLink className="nav-links" style={(obj) => {
              return handleStyleForNavLink(obj);
            }}  to="/orders">
                <button className="dropdown-item">
                  Orders
                </button>
              </NavLink>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            className="nav-links"
            style={(obj) => {
              return handleStyleForNavLink(obj);
            }}
            to="/login"
          >
            <MdOutlineAccountCircle className="account" />
          </NavLink>
        )}

        <NavLink
          className="nav-links"
          style={(obj) => {
            return handleStyleForNavLink(obj);
          }}
          to="/cart"
        >
          <div className={styles.cartContainer}>
            <MdOutlineShoppingBag className={styles.cartIcon} />
            Cart
            {checkBagLength && (
              <div className={styles.cartCount}>{checkBagLength}</div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
