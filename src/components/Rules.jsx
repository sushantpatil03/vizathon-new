import React from 'react'

const Rules = () => {
    return (
        <section
         id="rules-section" 
         className="ptb-70 gray-light-bg"
         >

        <div className="container mb-2">
            <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
                <div className="section-heading text-center">
                <strong className="color-secondary">When to Join?</strong>
                <h2> Viz-A-Thon Rules </h2>
                <span className="animate-border mr-auto ml-auto mb-4"></span>
                </div>
            </div>
            </div>

            <div className="flexxx">
                <div className="row all-rules">
                    <h5 className="rule">
                    ◆ There will be 2 rounds of the hackathon. First round will be where you will be given the data and you have to make attractive viz's offline. Second round will be final presentation round.
                    </h5>
                    <h5 className="rule">
                    ◆ Teams shortlisted from first round have to present their visualizations  in front of panel of judges.
                    </h5>
                    <h5 className="rule">
                    ◆ Only Undergraduate students are eligible to participate.
                    </h5>
                    <h5 className="rule">
                    ◆ Team size should be 3-4 strictly.
                    </h5>
                    <h5 className="rule">
                    ◆ It is mandatory for team leader to have a twitter account.</h5>
                </div>    
            </div>

        </div>
        </section>
    )
}

export default Rules