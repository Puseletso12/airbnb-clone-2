import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays · 26 January to 30 January · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/bd754bc8-3dfc-4b04-a805-83d991ccba8d.jpg?im_w=720"
        location="Johannesburg, South Africa"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="R1, 450 ZAR/ night"
        total="R10457 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b97fb6c9-1b73-4618-808b-e565eaf025f8.jpg?im_w=720"
        location="Cape Town, South Africa"
        title="Cape Town Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="R2, 500 ZAR/ night"
        total="R12500 total"
      />
      <SearchResult
        img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
        location="Private room in center of Johannesburg"
        title="30 mins to Oxford Street, Excel Johannesburg"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="R1, 300 zar / night"
        total="R13200 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-48555131/original/a835a522-5d71-419d-a5b5-241581ef93a4.jpeg?im_w=720"
        location="Sandton, South Africa"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="R1, 250 ZAR/ night"
        total="R12450 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/97b53bd5-bca1-4a52-96b9-0e462322dc66.jpg?im_w=720"
        location="Midrand, South Africa"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="R750 ZAR / night"
        total="R4800 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720"
        location="Durban, South Africa"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="R2, 000 ZAR/ night"
        total="R10000 total"
      />
    </div>
  );
};

export default SearchPage;
