const Home = () => {

}

export default Home;

export const getServerSideProps = async (context) => {
    const BASE_URL = process.env.BASE_URL;

    const res = await fetch(`${BASE_URL}/Territories/All`);
    const { data } = await res.json();

}
