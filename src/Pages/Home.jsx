import styled from "styled-components"
import Select from '../Components/Select.jsx'
import NavBar from '../Components/Navbar.jsx'


const Container = styled.div`
display:flex;
height: 100vh;
width: 100%;
justify-content: space-between;

`

const Home = ()=>{
    return(
        <Container>
            <NavBar/>
            <Select/>
        </Container>
    )
}

export default Home