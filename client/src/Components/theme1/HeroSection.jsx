import { Image } from "../atoms/Image";
import bgImage from "../../assets/HeroVector.png";
import heroImage from "../../assets/hero-img.png";
import { Text } from "../atoms/Text";
import { HeroTexts } from "../particles/DataLists";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {

   function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      process.env.REACT_APP_DATA_SHEET,
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <section className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end ">
        <Image
          className="h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-[55%]"
          image={bgImage}
          alt="Hero Background Vector"
        />
        <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
          <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
            <Text
              as="p"
              className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal"
            >
              <Fade>{HeroTexts.firstText}</Fade>
            </Text>
            <Text
              as="h1"
              className=" text-color3 lg:text-7xl md:text-5xl text-3xl font-medium"
            >
              <Fade>{HeroTexts.secondText}</Fade>
            </Text>
            <Text
              as="p"
              className="text-color3 md:text-base text-sm text-justify font-light"
            >
              <Fade>{HeroTexts.thirdText}</Fade>
            </Text>

            {/* <Header/> */}
            <form class="w-full max-w-sm" onSubmit={(e) => Submit(e)}
            //  method="POST"  
            //  action="https://script.google.com/macros/s/AKfycbxI5mT9kTKD0zWZ1ZJutVSQyLI-RqX5rs8NPvTnsnA/dev"
             >
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Full Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                  name="Name"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="name"
                    type="text"
                    placeholder="Fullname"
                  />
                </div>
              </div>

              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Phone number
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                   name="Phone"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="phone"
                    type="number"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    E-mail
                  </label>
                </div>
                
                <div class="md:w-2/3">
                  <input
                   name="Email"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Location
                  </label>
                </div>
                
                <div class="md:w-2/3">
                  <input
                   name="Location"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    placeholder="Kedharnath"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <input class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" name="Name" type="submit" />
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-end md:order-2 order-1">
            <Slide direction="right">
              <Image
                image={heroImage}
                alt="Hero Image"
                className=" lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]"
              />
            </Slide>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
