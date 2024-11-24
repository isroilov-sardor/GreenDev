import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Bottom from './components/Bottom';

function App() {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('-Tanlang-');
  const [city, setCity] = useState('-Tanlang-');
  const [desc, setDesc] = useState('')
  const [data, setData] = useState([])

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  function validate() {
    if (name.length <= 3) {
      alert('Bunday isim mavjud emas');
      return false
    }
    if (lastname.length < 3) {
      alert('Bunday familiya mavjud emas');
      return false
    }
    if (!validateEmail(email)) {
      alert('Email notogri kiritilgan!')
      return false
    }
    if (country === '-Tanlang-') {
      alert('Country tanlang!');
      return false
    }
    if (city === '-Tanlang-') {
      alert('City tanlang!')
      return false
    }
    if (desc.length <= 5) {
      alert('Description yozing!');
      return false
    }
    return true
  }


  function handleClick(e) {
    e.preventDefault();
    const isValid = validate()
    if (!isValid) {
      return
    }

    const user = {
      name: name,
      lastname: lastname,
      email: email,
      country: country,
      city: city,
      desc: desc,
      id: Date.now()
    }

    const copied = [...data]
    copied.push(user);
    setData(copied)

    setName('');
    setLastName('');
    setEmail('');
    setCountry('-Tanlang-');
    setCity('-Tanlang-t');
    setDesc('')
  }
  return (
    <div className='all'>
      <div className="all-container">
        <Header></Header>
        <div className="card">
          <div className="container card-container">
            <form>
              <div className="form-desc">User Information</div>
              <div className="firstInput">
                <label htmlFor="1input">Name <span>*</span></label>
                <input value={name} onChange={(e) => { setName(e.target.value) }} className='nameInfo' type="text" id='1input' placeholder='Enter a name' />
              </div>
              <div className="secondInput">
                <label htmlFor="2input">Last Name  <span>*</span></label>
                <input value={lastname} onChange={(e) => { setLastName(e.target.value) }} className='nameInfo' type="text" id='2input' placeholder='Enter a lastname' />
              </div>
              <div className="thirdInput">
                <label htmlFor="3input">Email  <span>*</span></label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='nameInfo' type="email" id='3input' placeholder='Enter a email' />
              </div>
              <div className="select-same">
                <div className="select1">
                  <label htmlFor="select1">Country  <span>*</span></label>
                  <select value={country} onChange={(e) => { setCountry(e.target.value) }} id='select1'>
                    <option value="-Tanlang-" default>-Tanlang-</option>
                    <option value='Uzbekistan'>Uzbekistan</option>
                    <option value="Russia">Russia</option>
                    <option value="English">English</option>
                    <option value="Italy">Italy</option>
                  </select>
                </div>
                <div className="select2">
                  <label htmlFor="select2">City  <span>*</span></label>
                  <select value={city} onChange={(e) => { setCity(e.target.value) }} id="select2">
                    <option value="-Tanlang-">-Tanlang-</option>
                    <option value="Tashkent">Tashkent</option>
                    <option value="Farghana">Ferghana</option>
                    <option value="London">London</option>
                    <option value="Moskow">Moskow</option>
                  </select>
                </div>
              </div>
              <div className="textarea1">
                <label htmlFor="text1">Description <span>*</span></label>
                <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} id="text1" className='text1' placeholder='Description:'></textarea>
              </div>
              <button onClick={handleClick} className='btn4'>SAVE 🔥</button>
            </form>
          </div>
          <div className="wrapper">
            <div className="container wr-container">
              {data.length > 0 && data.map((data, index) => {
                return (
                  <div className="wr-card" key={index}>
                    <img src="https://picsum.photos/200/300" alt="" />
                    <div className="wr-same">
                      <div className="familiya-same">
                        <h1>{data.name}</h1>
                        <h1>{data.lastname}</h1>
                      </div>
                      <h3>{data.email}</h3>
                      <div className="card-same">
                        <div className="card-desc1">Country: {data.country}</div>
                        <div className="card-desc2">City: {data.city}</div>
                      </div>
                      <p>Description: {data.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Bottom></Bottom>
      </div>
    </div>
  )
}

export default App
