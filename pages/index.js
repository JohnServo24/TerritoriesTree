const Home = ({ territories }) => {
    console.log(territories)

}

export default Home;

export const getServerSideProps = async () => {
    const BASE_URL = process.env.BASE_URL;

    const res = await fetch(`${BASE_URL}/Territories/All`);
    const { data } = await res.json();

    return {
        props: {
            territories: data,
        }
    }
}
