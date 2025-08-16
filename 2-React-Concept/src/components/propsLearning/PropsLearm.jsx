const PropLearning = () => {
    return (
        <>
            <User 
                name="Narottam Kumar" 
                age={22}
                isMarried={false}
                hobbies={["Coding", "Reading", "Sleeping"]}
            />
        </>
    );
};

// const User = (props)=>{ props.name, props.age
const User = ({name,age,isMarried,hobbies})=>{
    return (
        <section>
            <h1>Name: {name}</h1>
            <h2>Age: {age} </h2>
            <h3>IsMarried: {isMarried? "Married" : "Not Married"}</h3>
            <h4>Hobbies: {hobbies}</h4>
        </section>
    )
}

export default PropLearning;
export { User };