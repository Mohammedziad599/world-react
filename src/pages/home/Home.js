import "./Home.css";
import Search from "../../components/search/Search";
import {Grid, Paper} from "@mui/material";
import FilterMenu from "../../components/filter-menu/FilterMenu";
import Favourite from "../../components/favourite/Favourite";
import CountriesList from "../../components/countries-list/CountriesList";

function Home() {
  return (<>
    <Grid
      container
      sx={{
        py: 2, justifyContent: "space-between"
      }}
    >
      <Grid
        xs={12}
        md={5}
        lg={4}
        item={true}
        sx={{
          my: 1.5
        }}
      >
        <Search
          placeholder="Search"
        />
      </Grid>
      <Grid
        xs={6}
        md={2}
        lg={2}
        item={true}
        sx={{
          my: 1.5
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "100%",
          }}
        >
          <FilterMenu
            sx={{
              width: "100%",
              py: 1.75,
            }}
          >
          </FilterMenu>
        </Paper>
      </Grid>
    </Grid>
    <Grid
      container
      sx={{
        height: {
          xs: "fit-content",
          lg: "calc(100vh - 10.85rem)"
        },
      }}
    >
      <Grid
        item
        lg={3}
        sx={{
          pr: 2,
          display: {
            xs: "none",
            lg: "block"
          }
        }}>
        <Favourite
          sx={{
            height: {
              xs: "0",
              lg: "calc(100vh - 11.5rem)"
            },
            overflow: "scroll"
          }}
          countries={[{
            name: "Palestine", code: "PSE"
          }]}
        />
      </Grid>
      <Grid
        sx={{
          height: {
            xs: "0",
            lg: "calc(100vh - 11rem)"
          },
          overflow: "scroll"
        }}
        item
        xs={12}
        lg={9}>
        <CountriesList countries={[{
          "flags": {
            "png": "https://flagcdn.com/w320/kw.png", "svg": "https://flagcdn.com/kw.svg"
          }, "name": {
            "common": "Kuwait", "official": "State of Kuwait", "nativeName": {
              "ara": {
                "official": "دولة الكويت", "common": "الكويت"
              }
            }
          }, "code": "KWT", "capital": ["Kuwait City"], "region": "Asia", "population": 4270563
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/pw.png", "svg": "https://flagcdn.com/pw.svg"
          }, "name": {
            "common": "Palau", "official": "Republic of Palau", "nativeName": {
              "eng": {
                "official": "Republic of Palau", "common": "Palau"
              }, "pau": {
                "official": "Beluu er a Belau", "common": "Belau"
              }
            }
          }, "code": "PLW", "capital": ["Ngerulmud"], "region": "Oceania", "population": 18092
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/li.png", "svg": "https://flagcdn.com/li.svg"
          }, "name": {
            "common": "Liechtenstein", "official": "Principality of Liechtenstein", "nativeName": {
              "deu": {
                "official": "Fürstentum Liechtenstein", "common": "Liechtenstein"
              }
            }
          }, "code": "LIE", "capital": ["Vaduz"], "region": "Europe", "population": 38137
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/md.png", "svg": "https://flagcdn.com/md.svg"
          }, "name": {
            "common": "Moldova", "official": "Republic of Moldova", "nativeName": {
              "ron": {
                "official": "Republica Moldova", "common": "Moldova"
              }
            }
          }, "code": "MDA", "capital": ["Chișinău"], "region": "Europe", "population": 2617820
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/ao.png", "svg": "https://flagcdn.com/ao.svg"
          }, "name": {
            "common": "Angola", "official": "Republic of Angola", "nativeName": {
              "por": {
                "official": "República de Angola", "common": "Angola"
              }
            }
          }, "code": "AGO", "capital": ["Luanda"], "region": "Africa", "population": 32866268
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/bo.png", "svg": "https://flagcdn.com/bo.svg"
          }, "name": {
            "common": "Bolivia", "official": "Plurinational State of Bolivia", "nativeName": {
              "aym": {
                "official": "Wuliwya Suyu", "common": "Wuliwya"
              }, "grn": {
                "official": "Tetã Volívia", "common": "Volívia"
              }, "que": {
                "official": "Buliwya Mamallaqta", "common": "Buliwya"
              }, "spa": {
                "official": "Estado Plurinacional de Bolivia", "common": "Bolivia"
              }
            }
          }, "code": "BOL", "capital": ["Sucre"], "region": "Americas", "population": 11673029
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/tv.png", "svg": "https://flagcdn.com/tv.svg"
          }, "name": {
            "common": "Tuvalu", "official": "Tuvalu", "nativeName": {
              "eng": {
                "official": "Tuvalu", "common": "Tuvalu"
              }, "tvl": {
                "official": "Tuvalu", "common": "Tuvalu"
              }
            }
          }, "code": "TUV", "capital": ["Funafuti"], "region": "Oceania", "population": 11792
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/pe.png", "svg": "https://flagcdn.com/pe.svg"
          }, "name": {
            "common": "Peru", "official": "Republic of Peru", "nativeName": {
              "aym": {
                "official": "Piruw Suyu", "common": "Piruw"
              }, "que": {
                "official": "Piruw Ripuwlika", "common": "Piruw"
              }, "spa": {
                "official": "República del Perú", "common": "Perú"
              }
            }
          }, "code": "PER", "capital": ["Lima"], "region": "Americas", "population": 32971846
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/nc.png", "svg": "https://flagcdn.com/nc.svg"
          }, "name": {
            "common": "New Caledonia", "official": "New Caledonia", "nativeName": {
              "fra": {
                "official": "Nouvelle-Calédonie", "common": "Nouvelle-Calédonie"
              }
            }
          }, "code": "NCL", "capital": ["Nouméa"], "region": "Oceania", "population": 271960
        }, {
          "flags": {
            "png": "https://flagcdn.com/w320/de.png", "svg": "https://flagcdn.com/de.svg"
          }, "name": {
            "common": "Germany", "official": "Federal Republic of Germany", "nativeName": {
              "deu": {
                "official": "Bundesrepublik Deutschland", "common": "Deutschland"
              }
            }
          }, "code": "DEU", "capital": ["Berlin"], "region": "Europe", "population": 83240525
        },]}/>
      </Grid>
    </Grid>
  </>);
}

export default Home;