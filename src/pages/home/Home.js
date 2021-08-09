import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import actions from "./redux/actions";
// import Header from "../../component/header/Header";
import Location from "../../component/location/Location";
import ProductListingCard from "../../component/productListing-card/ProductListingCard";
import Topbar from "../../component/Topbar/Topbar";
import countryData from "./countrydata";

const Home = () => {
        const [readMore, setReadMore] = useState(false);
        const [searchTerm, setsearchTerm] = useState("");

        const products = useSelector((state) => state.productlisting.allproducts);
        const loading = useSelector((state) => state.productlisting.loading);

        const error = useSelector((state) => state.productlisting.error);

        const dispatch = useDispatch();

        useEffect((data) => {
            dispatch(actions.loadproduct(data));
        }, []);
        const linkName = readMore ? "view less " : "view more... ";

        return ( <
                div >
                <
                Topbar onChange = {
                    (e) => setsearchTerm(e.target.value) }
                />

                <
                Location / >

                <
                div className = "home__row" >
                <
                div className = "home__sidebarCategory" >
                <
                h1 > Categories < /h1> <
                ul >
                <
                li > Shoppoing Bags < /li> <
                li > Prefab houses < /li> <
                li > Handbags < /li> <
                /ul> <
                div className = "home__seeMoreContent"
                onClick = {
                    () => {
                        setReadMore(!readMore);
                    }
                } >
                {
                    readMore && ( <
                        div className = "extra__content" >
                        <
                        ul >
                        <
                        li > Showcase < /li> <
                        li > packaging Bags < /li> <
                        li > Excavators < /li> <
                        li > Dining Chairs < /li> <
                        /ul> <
                        /div>
                    )
                }

                <
                div className = "home__sidebarSeeMore" > { linkName } < /div> <
                /div> <
                div className = "home__minOrder" >
                <
                h3 > Min.Order < /h3> <
                div className = "home__minOrderContent" >
                <
                input / >
                <
                button > OK < /button> <
                /div> <
                /div> <
                div className = "home__priceRange" >
                <
                h3 > Price < /h3> <
                div className = "home__priceRangeContent" >
                <
                input / >
                <
                span > - < /span> <
                input / >
                <
                button > OK < /button> <
                /div> <
                /div> <
                div className = "home__sidebarCountries" >
                <
                h3 > Supplier District < /h3>

                <
                div className = "home__sidebarRadiobuttom-country" > {
                    countryData.map((c) => {
                        return ( <
                            div className = "home__countryList" >
                            <
                            input type = "radio"
                            id = "district"
                            name = "district"
                            value = ""
                            className = "home__radio" /
                            >
                            <
                            label > { c } < /label> <
                            /div>
                        );
                    })
                } <
                /div> <
                /div> <
                /div>

                {
                    /* <div>
                      {people.filter(person => 
                        person.age < 60).map(filteredPerson => (
                        <li>
                          {filteredPerson.name}
                        </li>
                      ))}
                    </div> */
                }

                <
                div className = "home__productListing" > {
                    products.loading && < p > loading... < /p>} {
                        products
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (
                                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    val.category.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            })
                            .map((p) => ( <
                                ProductListingCard key = { p.id }
                                id = { p.id }
                                title = { p.title }
                                price = { p.price }
                                desc = { p.description }
                                category = { p.category }
                                image = { p.image }
                                />
                            ))
                    } {
                        products.length === 0 && !loading && < p > No products found < /p>} {
                            error && !loading && < p > { error } < /p>} <
                                /div> <
                                /div> <
                                /div>
                        );
                    };

                    export default Home;