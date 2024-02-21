import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    label: "Ifaun",
    value: "Ifaun",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    img: ["/Ifaun1.png", "/Ifaun2.png", "/Ifaun3.png"],
  },
  {
    label: "Chevronar",
    value: "Chevronar",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      img: ["/Chevronar1.png"],
  },
  {
    label: "Vue",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Angular",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Svelte",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

const TabsComp = () => {
  const [active, setActive] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("Ifaun");

  return (
    <div className=" text-center my-5 w-full ">
      <Typography
        variant="h4"
        className="mx-auto w-full !text-gray-400 max-w-4xl"
      >
        Nuestros proyectos
      </Typography>
      <Tabs value={activeTab}>
        <TabsHeader
          className="text-gray-900 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-50" : "text-gray-400"}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc, img }) => (
            <TabPanel key={value} value={value}>
              <Row>
                <div className="color-card">
                  <div className=" flex justify-between  items-center ">
                    <Col>
                      <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                          {value}
                        </h2>
                        <p className="mt-4 text-gray-500">{desc}</p>

                        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8"></dl>
                      </div>
                    </Col>

                    <Col>
                      <div className="grid gap-4">
                        <div>
                          <img
                            className="h-auto img-fluid rounded-lg object-cover object-center md:h-[480px]"
                            src={active}
                            alt=""
                          />
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                          {img &&
                            img.map((image, index) => (
                              <div key={index}>
                                <img
                                  onClick={() => setActive(image)}
                                  src={image}
                                  className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
                                  alt={`gallery-image-${index}`}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    </Col>
                  </div>
                </div>
              </Row>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsComp;
