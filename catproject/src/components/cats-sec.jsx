import React, { Component } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BasicModal from "./modal";
import AnimatedText from "./animatedText";

class Catt extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    this.getCats();
  }

  getCats() {
    const apiKey =
      "live_SQJlfnEUgVpG1TugdU1kHCU4f172lCupVjTzQdnJPymHmmpijTMqcdCVfty4g8pa";
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=20";

    const headers = {
      "x-api-key": apiKey,
    };

    axios
      .get(apiUrl, { headers })
      .then((res) => {
        // Assuming the API response structure remains consistent
        const catData = res.data;

        // Extract breed information
        const breedsInfo = catData.map((cat) => {
          return cat.breeds.length > 0 ? cat.breeds[0] : null;
        });

        // Filter out null values (cats without breed information)
        const filteredBreedsInfo = breedsInfo.filter((breed) => breed !== null);

        // Now you can use the filteredBreedsInfo in your component state or elsewhere
        this.setState({ cats: catData, breeds: filteredBreedsInfo });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
      <div className="w-full p-10 mt-10 bg-transparent my-15 ">
      <AnimatedText
            text={"Familiarize with our Cat-alogue"}
            className=" xs:!text-xl"
            
            />
      </div>
        <div className=" w-screen columns-3 gap-4">
            
          {this.state.cats.map((item) => (
            <div key={item.id} className=" p-3 flex flex-col">
              <img
                src={item.url}
                width={100}
                height={60}
                className=" aspect-square w-full rounded-3xl"
              />

              {item.breeds && item.breeds.length > 0 && (
                <BasicModal
                  info={
                    <ul className="text-blue-700 font-extralight font text-xs sm:gap-2  sm:text-xs flex flex-row">
                      <li>Name: {item.breeds[0].name}</li>
                      <li>Origin: {item.breeds[0].origin}</li>
                      <li className=" sm:hidden">Country Code: {item.breeds[0].country_code}</li>
                      <li className=" sm:hidden">
                        Weight:{" "}
                        {item.breeds[0].weight
                          ? item.breeds[0].weight.imperial
                          : "N/A"}
                      </li>
                      <li className=" sm:hidden">Life Span: {item.breeds[0].life_span}</li>

                      {/* Add more breed information here if needed */}
                    </ul>
                  }
                  link={item.breeds[0].wikipedia_url}
                />

              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Catt;
