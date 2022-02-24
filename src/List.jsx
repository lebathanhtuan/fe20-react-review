import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function List({ productList }) {
  const [count, setCount] = useState(5);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    class: "",
  });
  const { state } = useLocation();

  // Mounting
  useEffect(() => {
    // Call API 1
    // Call API 2
    console.log("Mới vào List");

    return () => {
      console.log("Rời khỏi List");
    };
  }, []);

  // Updation
  useEffect(() => {
    console.log("Update List", pin1, pin2, pin3);
    if (pin1 === "1" && pin2 === "2" && pin3 === "3") {
      alert("Bạn đã nhập đúng mật khẩu");
    }
  }, [pin1, pin2, pin3]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <li key={item.id}>
          {item.name} - {item.price}
        </li>
      );
    });
  };

  return (
    <div>
      List - {state?.name}
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h3>{count}</h3>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <input
        name="fullName"
        placeholder="Full name"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="class"
        placeholder="Class name"
        onChange={(e) => handleChange(e)}
      />
      <div>
        <input name="pin1" onChange={(e) => setPin1(e.target.value)} />
        <input name="pin2" onChange={(e) => setPin2(e.target.value)} />
        <input name="pin3" onChange={(e) => setPin3(e.target.value)} />
      </div>
      <h4>Full name: {form.fullName}</h4>
      <h4>Class name: {form.class}</h4>
      <ul>{renderProductList()}</ul>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default List;
