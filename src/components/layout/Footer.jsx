import React from 'react'


function Footer() {
    const date = new Date().getFullYear();
    console.log(date);
    return (
        <footer 
        // style={{width:'100vw', marginLeft:'-50px', overflow:'hidden'}}
        style={{textDecoration: 'none'}}
        >

            Copyright &copy; {date}
        </footer>
    )
}

export default Footer
