import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Preference.css";

const countries = [
  "China",
  "Hong Kong",
  "Indonesia",
  "India",
  "Japan",
  "South Korea",
  "Malaysia",
  "Philippines",
  "Singapore",
  "Thailand",
  "Taiwan",
  "Vietnam",
];

const citiesByCountry = {
  China: [ "Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu", "Tianjin", "Chongqing", "Hangzhou",
    "Xi'an", "Nanjing", "Wuhan", "Suzhou", "Shenyang", "Harbin", "Changsha", "Dalian", "Changchun",
    "Zhengzhou", "Qingdao", "Jinan"],
  Indonesia: [
    "Aceh", "Bali", "Balikpapan", "Banda Aceh",
    "Bandar Lampung", "Bandung", "Banjarmasin", "Batam", "Bekasi", "Bogor", "Cirebon", "Denpasar", "Depok",
    "Jambi", "Jayapura", "Jogjakarta", "Kupang", "Makassar", "Malang", "Manado", "Mataram", "Medan",
    "Padang", "Palangkaraya", "Palembang", "Palu", "Pekanbaru", "Pontianak", "Samarkand", "Semarang",
    "Serang", "Sidoarjo", "Sleman", "Solo", "Surabaya", "Tangerang", "Tasikmalaya", "Yogyakarta"],
  India: ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam",
    "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad"],
  Japan: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Sapporo"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
  Malaysia: ["Kuala Lumpur", "George Town", "Ipoh", "Kuching", "Johor Bahru"],
  Philippines: ["Manila", "Quezon City", "Cebu City", "Makati City", "Davao City"],
  Singapore: ["Singapore City", "Jurong", "Tampines", "Woodlands", "Changi"],
  Thailand: ["Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Krabi"],
  Taiwan: ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Hsinchu"],
  Vietnam: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong", "Can Tho"],
};


function Preference() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setCity("");
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div>
      <title>Match Preferences</title>
      <link rel="stylesheet" href="styles/preference.css" />
      <div className="prefbody">
        <div className="prefcontainer">
          <div className="preftitle">Match Preferences</div>
          <div className="prefdesc">We would like to know your preferences before we help you match!</div>
          <div className="pbreed">Breed</div>
          <div className="pbreed-box">
            <label>
              <input type="radio" name="type" defaultValue="any" />
              <span>Any</span>
            </label>
            <label>
              <input type="radio" name="type" defaultValue="mixed" />
              <span>Mixed</span>
            </label>
            <label>
              <input type="radio" name="type" defaultValue="same" />
              <span>Same</span>
            </label>
          </div>
          <div className="plocation1">Location</div>
          <div className="plocationbox">
            <div className="ploccount">
              <div className="dropdown">
                <button className="dropbtn" onClick={() => handleCountryChange("")}>
                  {country ? country : "Select Country"}
                </button>
                <div className={`dropdown-content ${country ? "show" : ""}`}>
                  {countries.map((country) => (
                    <p key={country} onClick={() => handleCountryChange(country)}>
                      {country}
                    </p>
                  ))}
                </div>
              </div>
              <img className="prefdown" src="image/down.png" />
            </div>
            <div className="ploccity">
              <div className="dropdown">
                <button className="dropbtn" onClick={() => handleCityChange("")}>
                  {city ? city : "Select City"}
                </button>
                <div className={`dropdown-content ${city ? "show" : ""}`}>
                  {citiesByCountry[country] &&
                    citiesByCountry[country].map((city) => (
                      <p key={city} onClick={() => handleCityChange(city)}>
                        {city}
                      </p>
                    ))}
                </div>
              </div>
              <img className="prefdown" src="image/down.png" />
            </div>
            <label>
              <input type="checkbox" name="type" defaultValue="all" />
              <span>All</span>
            </label>
          </div>
          <div className="preflow">
            <div className="modnotif">You can modify your preferences later from your profile.</div>
            <div className="prefleft">
              <a href="choose">
                <img className="prefback" src="image/back.png" alt="Back" />
              </a>
              <a href="choose">
                <button className="psave">Save</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preference;
