import React from 'react'

function Footer() {
    const date = new Date().getFullYear();
    console.log(date);
    return (
        <footer>

            Copyright &copy; {date}
        </footer>
    )
}

export default Footer
