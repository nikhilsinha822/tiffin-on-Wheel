import "./callForAction.css"

const CallForAction = () => {
    return <>
    <section className="no-padding">
    <div className="container-fluid row row-eq-height"  id="call-to-action">
        <div className="col-lg-6 box-padding bg-color2" style={{padding:"30px"}}>
            <div className="text-center ">
                <h4>Grab the Tiffin</h4>
                <p>
                    Special package for offices/college students. The menu does not feel repetitive anymore and you have a tasty well
                    balanced affordable meal
                    anywhere. We also provide tiffin control panel, for better management.
                </p>
                <a href="/customer" className="send">Book Meal</a>
            </div>
        </div>
        <div className="col-lg-6 box-padding bg-color2" style={{padding:"30px"}}>
            <div className="text-center ">
                <h4>Work with us</h4>
                <p>Join our company. If there's some kind of magic in your hands. And a meal
                    cooked
                    by you always makes the person happy eating it. Would you like to be our vendor partner.
                </p>
                <a href="/vendor" className="send">Join As Vendor</a>
            </div>
        </div>
    </div>
</section>
    </>
}

export default CallForAction