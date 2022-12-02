import React from 'react'
import { useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function Search() {
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const roasters = useSelector((state) => state.roasters)
  // const cafes = useSelector((state) => state.cafes)

  // console.log('searchRoaster in Search.jsx', searchRoasters);

  const concatArray = searchRoasters.concat(roasters)
  console.log(concatArray,'concatArray');

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item , 'on select');
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <>
      <div>
        <div style={{ width: 200, margin: 10 }}>
          <label>Search</label>
          <ReactSearchAutocomplete
            items={searchRoasters}
            fuseOptions={{ threshold:'0.4', keys: ["roasterName", "cafeName"]} } // Search on both fields
            resultStringKeyName="cafeName" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "12px",
              fontFamily: "Courier",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
         
        </div>
      </div>
    </>
  )
}