import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Container } from "react-bootstrap";

const AboutUsPage = () => {
  const { countries } = useCountries();

  // Definir los países que deseas mostrar en el menú
  const countriesToShow = ["Argentina", "Brazil", "Chile", "Spain", "United States", "United Kingdom", "Canada", "Australia", "Ecuador", "Peru","Venezuela", "Colombia", "Mexico", "Uruguay"];

  // Filtrar los países que coinciden con la lista countriesToShow
  const filteredCountries = countries.filter(country =>
    countriesToShow.includes(country.name)
  );

  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = filteredCountries[country];

  return (
    <Container>
      <div className="relative flex w-full max-w-[24rem]">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
            >
              <img
                src={flags.svg}
                alt={name}
                className="h-4 w-4 rounded-full object-cover"
              />
              {countryCallingCode}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {filteredCountries.map(({ name, flags, countryCallingCode }, index) => (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          type="tel"
          placeholder="Mobile Number"
          className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
      </div>
    </Container>
  );
};

export default AboutUsPage;
