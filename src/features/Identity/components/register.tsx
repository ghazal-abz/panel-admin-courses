import logo from "@assets/images/logo.svg";

const Register = () => {
    return (
        <>
            <div className="text-center mt-4">
                <img src={logo} style={{ height: "100px" }} />
                <h1 className="h2">title</h1>
                <p className="lead">
                    hett
                </p>
                <p className="lead">
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="m-sm-4">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">login.mobile</label>
                                <input
                                    className="form-control form-control-lg"
                                />
                                <p className="text-danger small fw-bolder mt-1">
                                    valid
                                </p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">login.password</label>
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                />
                            </div>
                            <div className="text-center mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary"
                                >
                                    hey
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;
