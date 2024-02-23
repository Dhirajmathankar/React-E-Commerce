import { Navbar, Main, Product, Footer } from "../components";

function Home(props) {
  return (
    <>
      <Navbar />
      <Main />
      <Product flag={props.flag}/>
      <Footer />
    </>
  )
}

export default Home