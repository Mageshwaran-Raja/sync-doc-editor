import React from "react";
import "../../Styles/Overall.css";
import { CiFilter, CiSearch } from "react-icons/ci";
import { Popover } from "@radix-ui/themes";
import countries from "../../json/treeDatas.json";
import { FiArrowRight } from "react-icons/fi";
import { Localization } from "../constants/constant";

function SearchContent() {
  return (
    <>
      <div className="display-flex justify-space-between">
        <div className="display-flex">
          <div>
            <div className="inputfield" >
                <input type="text" placeholder="Search" />
            </div>
            <div className="absolute mt-27 ml10 fs20">
                <CiSearch />
            </div>
          </div>
          <div className="search-btn">
            <button className="rightarrow-key">
                <FiArrowRight />
            </button>
          </div>
        </div>
        <div className="filter-btn">
          <Popover.Root>
            <Popover.Trigger>
              <button className="filter-key-icon">
                <CiFilter />
              </button>
            </Popover.Trigger>
            <Popover.Content className="content-filter">
              {/* header */}
              <div className="header-border">
                <div className="display-flex justify-space-between pd-12">
                  <div className="mt-3">
                    <p className="filter-popover-content">
                      {Localization.Filterbyunitlabel}
                    </p>
                  </div>
                  <div>
                    <p className="filter-popover-content clearall">
                      {Localization.Clearall}
                    </p>
                  </div>
                </div>
              </div>
              {/* content scroll */}
              <div className='pd-12 filter-popover-content-scroll'>
                    {countries.map((country) => (
                        <div key={country.id}>
                        {country.name}
                        </div>
                    ))}           
              </div>

              {/* <div className="pd-12">
                <ScrollArea type="auto" scrollbars="both" size="1">
                  <div style={{ height: 300 }}>
                    {countries.map((country) => (
                      <div key={country.id}>{country.name}</div>
                    ))}
                  </div>
                </ScrollArea>

                <ScrollArea
                  radius="full"
                  type="always"
                  scrollbars="horizontal"
                  style={{ width: 350, height: 20 }}
                >
                  <Box height="300px">
                    {countries.map((country) => (
                      <div key={country.id}>{country.name}</div>
                    ))}
                  </Box>
                </ScrollArea> 
              </div> */}

              {/* footer */}
              <div className="filter-popover-content-footer-border">
                <div className="display-flex justify-space-between pd-12">
                  <div>
                    <button className="bg-white-400 border-gray-200 border-2 text-black px-3 rounded">
                      Cancel
                    </button>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white px-3 rounded">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>
      </div>
    </>
  );
}

export default SearchContent;
