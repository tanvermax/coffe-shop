
const Heading = ({title,subtile}) => {
    return (
        <div className="my-12 flex flex-col justify-center items-center">
            <h1 className="text-center font-thin text-3xl">{title}</h1>
            <p className="text-center font-thin text-xs text-gray-500">{subtile}</p>
        </div>
    );
};

export default Heading;