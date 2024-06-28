import React from "react";

const Privacy = () => {
  return (
    <section className="privacy-policy mt-20 pt-120 pb-120 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xxl-8">
            <div className="nb3-lg-bg pb-0 pb-md-4 p-4 p-sm-10 p-lg-15 cus-rounded-2">
              <h2 className="text-center mb-10 mb-lg-15">NOTICE TO CANDIDATES</h2>
              <div className="privacy-policy__card d-flex flex-column gap-8 gap-lg-10">
                <div className="privacy-policy__part">
                  <h5 className="mb-4">HOW TO APPLY FOR ELECTION</h5>
                  <p className="mt-3">
                    We are pleased to announce the commencement of the election
                    process. Interested candidates are requested to follow the
                    guidelines below to file their nomination. Please ensure all
                    documents are complete and submitted within the stipulated
                    timeframe.
                  </p>
                </div>
                <div className="privacy-policy__part">
                  <h5 className="mb-4">
                    {" "}
                    Required Details and Documentation for Filing Nomination
                  </h5>

                  <ul className="ul-decimal mt-5 d-flex gap-3 flex-column">
                    <li>Name: Full name of the candidate.</li>
                    <li>
                      Nomination Form: Complete the official Nomination Form
                      available at the Election Commission's office or website.
                    </li>
                    <li>
                      Affidavit: Submit a sworn affidavit stating your personal
                      details, as well as information on assets, liabilities,
                      and criminal antecedents.
                    </li>
                    <li>
                      Criminal Antecedents: Provide details of any criminal
                      cases pending against you. If none, declare the same in
                      the affidavit.
                    </li>
                    <li>
                      Assets and Liabilities: Declare your assets (movable and
                      immovable) and liabilities. Include those of your spouse
                      and dependents.
                    </li>
                    <li>
                      Electoral Roll Entry: Provide proof of your entry in the
                      electoral roll of the constituency from which you are
                      contesting.
                    </li>
                    <li>
                      Security Deposit: Pay the required security deposit as
                      specified by the Election Commission. Receipt of the
                      payment must be attached.
                    </li>
                    <li>
                      Party Affiliation: If contesting on behalf of a political
                      party, submit the party's authorization letter.
                      Independent candidates need not submit this.
                    </li>
                    <li>
                      Oath or Affirmation: Attach a copy of the oath or
                      affirmation as per the prescribed format.
                    </li>
                    <li>
                      Photographs: Submit recent passport-sized photographs as
                      specified by the Election Commission.
                    </li>
                    <li>
                      Proof of Age: : Submit recent passport-sized photographs
                      as specified by the Election Commission.
                    </li>
                    <li>
                      Proof of Address: : Submit recent passport-sized
                      photographs as specified by the Election Commission.
                    </li>
                    <li>
                      PAN Card Details: Submit recent passport-sized photographs
                      as specified by the Election Commission.
                    </li>
                    <li>
                      Voter ID Card Details: Submit recent passport-sized
                      photographs as specified by the Election Commission.
                    </li>
                  </ul>
                  <p className="mt-5">
                    Educational Qualifications: Submit copies of your
                    educational certificates and degrees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
