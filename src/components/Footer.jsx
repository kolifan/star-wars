function Footer({ onEmailClick }) {
    return (
        <footer className="rounded-bottom-4 row align-items-center mx-0">
            <button className="btn btn-danger border border-warning col-sm-2 offset-sm-3" onClick={onEmailClick}>
                Send me email
            </button>
        </footer>
    );
}

export default Footer;