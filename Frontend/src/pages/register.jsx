import "./register.css";
import Cities from "../data/cities";
import Year from "../data/year"

const Register = () => {
  return (
    <div className="frmBAckground">
      <form
        id="member-form"
        action="/register"
        method="post"
        encType="multipart/form-data"
      >
        <input
          required
          className="reg-input"
          type="hidden"
          name="_csrf"
          value="UnF5Y1ZOamJkNjYJHj4pFwY9MwA6B1pTPxAtFDcAXycmJwkBDn0LCg=="
        />
        <div className="form-group field-MessCitySel required">
          <select id="MessCitySel" name="Member[City]">
            <option value="" hidden>Select City</option>
            {Cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-location required">
          <label className="control-label" htmlFor="member-location"></label>
          <div className="kv-plugin-loading loading-member-location">
            &nbsp;
          </div>
          <input
            required
            className="reg-input"
            type="hidden"
            name="Member[Location]"
            value=""
          />
          <select
            id="member-location"
            name="Member[Location][]"
            multiple
            size="4"
            data-s2-options="s2options_ca860418"
            data-krajee-select2="select2_23d2cd3f"
            style={{ display: "none" }}
          ></select>

          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-type required">
          <label className="control-label" htmlFor="member-type"></label>
          <span id="parent-s2-togall-member-type" style={{ display: "none" }}>
            <span
              id="s2-togall-member-type"
              className="s2-togall-button s2-togall-select"
            >
              <span className="s2-select-label">
                <i className="glyphicon glyphicon-unchecked"></i>Select all
              </span>
              <span className="s2-unselect-label">
                <i className="glyphicon glyphicon-check"></i>Unselect all
              </span>
            </span>
          </span>
          <div className="kv-plugin-loading loading-member-type">&nbsp;</div>
          <input
            required
            className="reg-input"
            type="hidden"
            name="Member[Type]"
            value=""
          />
          <select
            id="member-type"
            name="Member[Type][]"
            multiple
            size="4"
            template="{input}{error}"
            data-s2-options="s2options_ae5051fd"
            data-krajee-select2="select2_05fbb85d"
            style={{ display: "none" }}
          >
            <option value="Chef/Cook">Chef/Cook</option>
            <option value="Food Mess">Food Mess</option>
            <option value="Hotel/Parcel Point">Hotel/Parcel Point</option>
            <option value="Mahila Gruh(Grih) Udyog">
              Mahila Gruh(Grih) Udyog
            </option>
          </select>

          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-cuisinetype required">
          <label className="control-label" htmlFor="member-cuisinetype"></label>
          <span
            id="parent-s2-togall-member-cuisinetype"
            style={{ display: "none" }}
          >
            <span
              id="s2-togall-member-cuisinetype"
              className="s2-togall-button s2-togall-select"
            >
              <span className="s2-select-label">
                <i className="glyphicon glyphicon-unchecked"></i>Select all
              </span>
              <span className="s2-unselect-label">
                <i className="glyphicon glyphicon-check"></i>Unselect all
              </span>
            </span>
          </span>
          <div className="kv-plugin-loading loading-member-cuisinetype">
            &nbsp;
          </div>
          <input
            required
            className="reg-input"
            type="hidden"
            name="Member[CuisineType]"
            value=""
          />
          <select
            id="member-cuisinetype"
            name="Member[CuisineType][]"
            multiple
            size="4"
            template="{input}{error}"
            data-s2-options="s2options_ae5051fd"
            data-krajee-select2="select2_c05ada64"
            style={{ display: "none" }}
          >
            <option value="Awadhi">Awadhi</option>
            <option value="Bengali">Bengali</option>
            <option value="Chinese">Chinese</option>
            <option value="Continental">Continental</option>
            <option value="Goan">Goan</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Jain Food">Jain Food</option>
            <option value="Korean">Korean</option>
            <option value="Maharashtrian">Maharashtrian</option>
            <option value="Malwani">Malwani</option>
            <option value="Mangal">Mangal</option>
            <option value="Mughlai">Mughlai</option>
            <option value="North Indian">North Indian</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Rajasthani">Rajasthani</option>
            <option value="South Indian">South Indian</option>
          </select>

          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-membername required">
          <input
            required
            className="reg-input form-control"
            type="text"
            id="member-membername"
            name="Member[MemberName]"
            maxLength="255"
            placeholder="Enter your tiffin mess/parcel point/hotel name"
          />
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-contactpersonname required">
          <input
            required
            className="reg-input"
            type="text"
            id="member-contactpersonname"
            name="Member[ContactPersonName]"
            maxLength="255"
            placeholder="Enter contact person name"
          />
          <div className="help-block"></div>
        </div>

        <div className="form-group field-member-contactno1 required">
          <input
            required
            className="reg-input"
            type="text"
            id="member-contactno1"
            name="Member[ContactNo1]"
            placeholder="Enter your mobile number "
          />
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-contactno2 required">
          <input
            required
            className="reg-input"
            type="text"
            id="member-contactno2"
            name="Member[ContactNo2]"
            maxLength="11"
            placeholder="Enter your alternate contact number"
          />
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-email required">
          <input
            required
            className="reg-input"
            type="text"
            id="member-email"
            name="Member[Email]"
            maxLength="60"
            placeholder="Enter your email"
          />
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-bussinessaddress required">
          <textarea
            id="member-bussinessaddress"
            name="Member[BussinessAddress]"
            rows="6"
            placeholder="Enter your business address(Please mention your detail address)"
          ></textarea>
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-bussinesszipcode">
          <input
            required
            className="reg-input"
            type="text"
            id="member-bussinesszipcode"
            name="Member[BussinessZipCode]"
            maxLength="6"
            placeholder="Enter your pin code"
          />
          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-category required">
          <label className="control-label" htmlFor="member-category"></label>
          <span
            id="parent-s2-togall-member-category"
            style={{ display: "none" }}
          >
            <span
              id="s2-togall-member-category"
              className="s2-togall-button s2-togall-select"
            >
              <span className="s2-select-label">
                <i className="glyphicon glyphicon-unchecked"></i>Select all
              </span>
              <span className="s2-unselect-label">
                <i className="glyphicon glyphicon-check"></i>Unselect all
              </span>
            </span>
          </span>
          <div className="kv-plugin-loading loading-member-category">
            &nbsp;
          </div>
          <input
            required
            className="reg-input"
            type="hidden"
            name="Member[Category]"
            value=""
          />
          <select
            id="member-category"
            className="form-control required"
            name="Member[Category][]"
            multiple
            size="4"
            template="{input}{error}"
            data-s2-options="s2options_ae5051fd"
            data-krajee-select2="select2_ff2dc7aa"
            style={{ display: "none" }}
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>

          <div className="help-block"></div>
        </div>
        <div className="form-group field-member-service required">
          <label className="control-label" htmlFor="member-service"></label>
          <span
            id="parent-s2-togall-member-service"
            style={{ display: "none" }}
          >
            <span
              id="s2-togall-member-service"
              className="s2-togall-button s2-togall-select"
            >
              <span className="s2-select-label">
                <i className="glyphicon glyphicon-unchecked"></i>Select all
              </span>
              <span className="s2-unselect-label">
                <i className="glyphicon glyphicon-check"></i>Unselect all
              </span>
            </span>
          </span>
          <div className="kv-plugin-loading loading-member-service">&nbsp;</div>
          <input
            required
            className="reg-input"
            type="hidden"
            name="Member[Service]"
            value=""
          />
          <select
            id="member-service"
            name="Member[Service][]"
            multiple
            size="4"
            data-s2-options="s2options_ae5051fd"
            data-krajee-select2="select2_99464677"
            style={{ display: "none" }}
          >
            <option value="Home Delivery">Home Delivery</option>
            <option value="At Premises">At Premises</option>
          </select>

          <div className="help-block"></div>
          <div className="form-group field-ExpYears required">
            <select id="ExpYears" name="Member[ExpYears]">
              <option value="">Select Serving Since...</option>
              {
                Year.map((year)=><option value={year}>{year}</option>)
              }
            </select>
            <div className="help-block"></div>
          </div>
          <br />
          <div className="form-group field-member-monthlyrate">
            <input
              required
              className="reg-input"
              type="text"
              id="member-monthlyrate"
              name="Member[MonthlyRate]"
              maxLength="6"
              placeholder="Enter monthly tiffin rate"
            />
            <div className="help-block"></div>
          </div>
          <div className="form-group field-member-tiffinrate required">
            <input
              required
              className="reg-input"
              type="text"
              id="member-tiffinrate"
              name="Member[TiffinRate]"
              maxLength="3"
              placeholder="Enter single tiffin rate"
            />
            <div className="help-block"></div>
          </div>
          <div className="form-group field-member-holidays">
            <label className="control-label" htmlFor="member-holidays">
              Holidays
            </label>
            <input
              required
              className="reg-input"
              type="hidden"
              name="Member[Holidays]"
              value=""
            />
            <div id="member-holidays">
              <label>
                <input
                  required
                  className="reginput"
                  type="checkbox"
                  name="Member[Holidays][]"
                  value="1"
                />{" "}
                Sunday
              </label>
              <label>
                <input
                  required
                  className="reginput"
                  type="checkbox"
                  name="Member[Holidays][]"
                  value="2"
                />{" "}
                Saturday
              </label>
            </div>

            <div className="help-block"></div>
          </div>
          <div className="timediv">
            <div className="form-group field-member-starttimemorning">
              <select
                id="member-starttimemorning"
                name="Member[StartTimeMorning]"
              >
                <option value="">Start Time Morning</option>
                <option value="00:30:00">06:00</option>
                <option value="01:00:00">06:30</option>
                <option value="01:30:00">07:00</option>
                <option value="02:00:00">07:30</option>
                <option value="02:30:00">08:00</option>
                <option value="03:00:00">08:30</option>
                <option value="03:30:00">09:00</option>
                <option value="04:00:00">09:30</option>
                <option value="04:30:00">10:00</option>
                <option value="05:00:00">10:30</option>
                <option value="05:30:00">11:00</option>
                <option value="06:00:00">11:30</option>
                <option value="06:30:00">12:00</option>
                <option value="07:00:00">12:30</option>
                <option value="07:30:00">13:00</option>
                <option value="08:00:00">13:30</option>
                <option value="08:30:00">14:00</option>
                <option value="09:00:00">14:30</option>
                <option value="09:30:00">15:00</option>
                <option value="10:00:00">15:30</option>
                <option value="10:30:00">16:00</option>
              </select>
              <div className="help-block"></div>
            </div>
            <div className="form-group field-member-closetimemorning">
              <select
                id="member-closetimemorning"
                name="Member[CloseTimeMorning]"
              >
                <option value="">Close Time Morning</option>
                <option value="00:30:00">06:00</option>
                <option value="01:00:00">06:30</option>
                <option value="01:30:00">07:00</option>
                <option value="02:00:00">07:30</option>
                <option value="02:30:00">08:00</option>
                <option value="03:00:00">08:30</option>
                <option value="03:30:00">09:00</option>
                <option value="04:00:00">09:30</option>
                <option value="04:30:00">10:00</option>
                <option value="05:00:00">10:30</option>
                <option value="05:30:00">11:00</option>
                <option value="06:00:00">11:30</option>
                <option value="06:30:00">12:00</option>
                <option value="07:00:00">12:30</option>
                <option value="07:30:00">13:00</option>
                <option value="08:00:00">13:30</option>
                <option value="08:30:00">14:00</option>
                <option value="09:00:00">14:30</option>
                <option value="09:30:00">15:00</option>
                <option value="10:00:00">15:30</option>
                <option value="10:30:00">16:00</option>
              </select>
              <div className="help-block"></div>
            </div>
            <div className="form-group field-member-starttimeevening">
              <select
                id="member-starttimeevening"
                name="Member[StartTimeEvening]"
              >
                <option value="">Start Time Evening</option>
                <option value="11:30:00">17:00</option>
                <option value="12:00:00">17:30</option>
                <option value="12:30:00">18:00</option>
                <option value="13:00:00">18:30</option>
                <option value="13:30:00">19:00</option>
                <option value="14:00:00">19:30</option>
                <option value="14:30:00">20:00</option>
                <option value="15:00:00">20:30</option>
                <option value="15:30:00">21:00</option>
                <option value="16:00:00">21:30</option>
                <option value="16:30:00">22:00</option>
                <option value="17:00:00">22:30</option>
                <option value="17:30:00">23:00</option>
                <option value="18:00:00">23:30</option>
              </select>
              <div className="help-block"></div>
            </div>
            <div className="form-group field-member-closetimeevening">
              <select
                id="member-closetimeevening"
                name="Member[CloseTimeEvening]"
              >
                <option value="">Close Time Evening</option>
                <option value="11:30:00">17:00</option>
                <option value="12:00:00">17:30</option>
                <option value="12:30:00">18:00</option>
                <option value="13:00:00">18:30</option>
                <option value="13:30:00">19:00</option>
                <option value="14:00:00">19:30</option>
                <option value="14:30:00">20:00</option>
                <option value="15:00:00">20:30</option>
                <option value="15:30:00">21:00</option>
                <option value="16:00:00">21:30</option>
                <option value="16:30:00">22:00</option>
                <option value="17:00:00">22:30</option>
                <option value="17:30:00">23:00</option>
                <option value="18:00:00">23:30</option>
              </select>
              <div className="help-block"></div>
            </div>
          </div>
          <div className="form-group field-member-note">
            Notes (If any)
            <br />
            <textarea
              id="member-note"
              name="Member[Note]"
              rows="3"
              placeholder="If you want to show any extra notes like Tiffin Packages, Discounts, Delivery Charges, etc. then mention it here"
            ></textarea>
            <div className="help-block"></div>
          </div>
          <div className="form-group field-member-whereyoucomefrom required">
            <label className="control-label" htmlFor="member-whereyoucomefrom">
              How did you came to know about MyMealDabba?
              <br />
            </label>
            <input
              required
              className="reg-input"
              type="text"
              id="member-whereyoucomefrom"
              name="Member[WhereYouComeFrom]"
              maxLength="100"
              placeholder="Social Media, Newspaper, TV, If other Pls Specify here....."
            />
            <div className="help-block"></div>
          </div>
          <div className="form-group field-member-isspecialordersforpatientaccepted">
            <br />
            <input
              required
              className="reg-input"
              type="hidden"
              name="Member[IsSpecialOrdersForPatientAccepted]"
              value="0"
            />
            <label>
              <input
                required
                className="reginput"
                type="checkbox"
                id="member-isspecialordersforpatientaccepted"
                name="Member[IsSpecialOrdersForPatientAccepted]"
                value="1"
              />{" "}
              Meal for Patients (Customize tiffin service will be provided)
            </label>
          </div>
          <div className="form-group field-member-isspecialordersaccepted">
            <input
              required
              className="reg-input"
              type="hidden"
              name="Member[IsSpecialOrdersAccepted]"
              value="0"
            />
            <label>
              <input
                required
                className="reginput"
                type="checkbox"
                id="member-isspecialordersaccepted"
                name="Member[IsSpecialOrdersAccepted]"
                value="1"
              />{" "}
              Special Order (Bulk/Customize order for Tiffin will be accepted)
            </label>
            <br />
          </div>
          <div className="form-group field-member-ispolicyaccepted required">
            <input
              required
              className="reg-input"
              type="hidden"
              name="Member[IsPolicyAccepted]"
              value="0"
            />
            <label>
              <input
                required
                className="reginput"
                type="checkbox"
                id="member-ispolicyaccepted"
                name="Member[IsPolicyAccepted]"
                value="1"
              />{" "}
              By Subscribing I accept the{" "}
              <a href="/terms" target="_blank">
                Terms
              </a>{" "}
              of MeMealDabba
            </label>
            <br />
          </div>
          <br />
          <div className="form-group">
            <button
              // onClick={()=>{alert("form Submited Success")}}
              type="submit"
              id="member-submit"
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "0",
                fontSize: "1rem",
                padding: "10px",
              }}
            >
              Submit
            </button>
            <span
              style={{
                color: "#cc0000",
                marginBottom: "10px",
                marginTop: "10px",
                display: "none",
              }}
            >
              Please fill out all the fields.0
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
