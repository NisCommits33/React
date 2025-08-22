const personCss = {
    name: "Nischal",
    theme:{
        backgroundColor: 'red',
        borderRadius: "3px solid red",

    }
}


function Profile(){
    const profilePicture = "https://i.imgur.com/QIrZWGIs.jpg";
    const description = "Nischal Image";
    return(
        <img style={personCss.theme} className = "avatar" src={profilePicture} alt= {description}/>

    );
}

export default function Gallery(){
    return(
        <section>
            <Profile/>
            <Profile/>

            <Profile/>
            <Profile/>
            <Profile/>

        </section>
    );
}