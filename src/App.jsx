import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='banner pb-5'>
        <div className='container pt-5'>
          <div className='logo text-center'>
            <img width="100%" src="./images/logo-3.png" alt="" />
          </div>
          <div className='mt-5 buttons'>
            <div className='button_border'>
              <img src="./images/button-border.png" alt="" />
              <p className='mb-0 button_text text-center fs-6'>CONTRACT</p>
            </div>
            <div className='button_border'>
              <img src="./images/button-border.png" alt="" />
              <p className='mb-0 button_text text-center fs-6'>AUDIT-REPORT</p>
              {/* <p className='mb-0 fs-7 text-center w-100' style={{ color: "#00b7ff" }}>COMING SOON</p> */}
            </div>
            <div className='button_border'>
              <img src="./images/button-border.png" alt="" />
              <p className='mb-0 button_text text-center fs-6'>MULTI-CHAIN</p>
              <p className='mb-0 fs-7 text-center w-100' style={{ color: "#00b7ff" }}>COMING SOON</p>
            </div>
            <div className='button_border'>
              <img src="./images/button-border.png" alt="" />
              <p className='mb-0 button_text text-center fs-6'>INFINITY SWAP</p>
              {/* <p className='mb-0 fs-7 text-center w-100' style={{ color: "#00b7ff" }}>COMING SOON</p> */}
            </div>
            <div className='button_border'>
              <img src="./images/button-border.png" alt="" />
              <p className='mb-0 button_text text-center fs-6 mt-1'>CONNECT WALLET</p>
            </div>
          </div>
          <div className='mt-5'>
            <img width="100%" src="./images/infinity-miner.png" alt="" />
          </div>
          <p className='fs-1 text-center mt-4' style={{ color: "#00b7ff" }}>LIMITLESS POSSIBILITIES</p>
          <div className='bnb_logos mt-5'>
            <div className='bnb_logo text-center'>
              <img width="100%" src="./images/BNB logo.png" alt="" />
            </div>
            <div>
              <img width="300px" src="./images/bnb_middle.png" alt="" />
            </div>
            <div className='bnb_logo text-center'>
              <img width="100%" src="./images/BNB logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='second_sec mt-5'>
        <div className='yellow_border container px-4'>
          <div className='deposits'>
            <div className='yellow_border2 m-3'>
              <div className='deposits_text'>
                <p className='mb-0 mt-3'>INITIAL DEPOSIT</p>
                <div className='mx-5'>
                  <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                </div>
                <p className='text-warning'>0 BNB</p>
              </div>
            </div>
            <div className='yellow_border2 m-3'>
              <div className='deposits_text'>
                <p className='mb-0 mt-3'>TOTAL DEPOSIT</p>
                <div className='mx-5'>
                  <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                </div>
                <p className='text-warning'>0 BNB</p>
              </div>
            </div>
            <div className='yellow_border2 m-3'>
              <div className='deposits_text'>
                <p className='mb-0 mt-3'>CARGO UNITS</p>
                <div className='mx-5'>
                  <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                </div>
                <p className=' text-warning'>1 BNB = 0 CARGO</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-4'>
          <div className='yellow_border px-4'>
            <div className='all_info'>
              <div>
                <div className='yellow_border2'>
                  <div className='wallet'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>CONTRACT</p>
                      <p className='mb-0 text-warning'>0 BNB</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>WALLET</p>
                      <p className='mb-0 text-warning'>0 BNB</p>
                    </div>
                    <div class="input-group input_max mt-3">
                      <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <span class="input-group-text" id="basic-addon2">MAX</span>
                    </div>
                    <p className='text-center fs-7 mb-2' style={{ color: "#00b7ff" }}>(MIN 0.1-MAX 25)</p>
                    <div className='w-100 text-center'>
                      <button className='approve_btn'>APPROVE BNB</button>
                    </div>
                    <div className='w-100 text-center mt-3'>
                      <button className='cargo_btn'>LAUNCH CARGO FLEET</button>
                    </div>
                    <p className='text-center fs-6 mb-0' style={{ color: "#00b7ff" }}>(DEPOSIT BNB)</p>
                  </div>
                </div>
                <div className='yellow_border2 mt-3'>
                  <div className='wallet'>
                    <p className='mb-0 text-white fs-5 text-center'>MISSION BRIEFING</p>
                    <div className='mx-3'>
                      <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>APR</p>
                      <p className='mb-0 text-warning'>3650%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>DAILY RETURN</p>
                      <p className='mb-0 text-warning'>10%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>REFERRAL BONUS</p>
                      <p className='mb-0 text-warning'>8%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>RE-SUPPLY BONUS</p>
                      <p className='mb-0 text-warning'>2%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>DEV FEE</p>
                      <p className='mb-0 text-warning'>3%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning'>TREASURY FEE</p>
                      <p className='mb-0 text-warning'>2%</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning fs-7'>REWARD ACCUMULATION CUT-OFF</p>
                      <p className='mb-0 text-warning fs-7'>24 HOURS</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning fs-7'>WITHDRAW COOL-DOWN</p>
                      <p className='mb-0 text-warning fs-7'>12 HOURS</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning fs-7'>COMPOUND TIMER</p>
                      <p className='mb-0 text-warning fs-7'>12 HOURS</p>
                    </div>
                    <div className='mx-3 d-flex justify-content-between align-items-center'>
                      <p className='mb-0 text-warning fs-7'>MANDATORY COMPOUND FEATURE</p>
                      <p className='mb-0 text-warning fs-7'>12 TIMES</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='yellow_border3 mx-3 my-3'>
                <div className='daily_yeild'>
                  <div className='daily_head mt-4'>
                    <p className='text-center mb-0 mx-4'>ESTIMATED
                      DAILY YIELD</p>
                    <div className='mx-3' style={{ marginTop: "-8px", marginBottom: "-8px" }}>
                      <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                    </div>
                    <p className='text-center mb-0 text-warning'>0 BNB</p>
                  </div>
                  <div className='px-3 d-flex justify-content-between align-items-center w-100 mt-4'>
                    <p className='mb-0 text-warning fs-5'>CARGO UNITS</p>
                    <p className='mb-0 text-warning fs-5'>987654321</p>
                  </div>
                  <div className='px-3 d-flex justify-content-between align-items-center w-100'>
                    <p className='mb-0 text-warning fs-5'>TODAYS HAUL</p>
                    <p className='mb-0 text-warning fs-5'> 6.12345 BNB</p>
                  </div>
                  <button className='supply_feet fs-4 mt-4'>RE-SUPPLY FLEET<br /><span className='fs-6' style={{ color: "#00b7ff" }}>( _ _ : _ _ : _ _ ) ( + 0% )</span></button>
                  <p className='mb-0 fs-7' style={{ color: "#00b7ff" }}>(COMPOUND)</p>
                  <button className='sell_cargo fs-4 mt-4'>SELL CARGO<br /><span className='fs-6' style={{ color: "#00b7ff" }}>( _ _ : _ _ :_ _ ) (- 75%)</span></button>
                  <p className='mb-0 fs-7' style={{ color: "#00b7ff" }}>(COMPOUND)</p>
                  <div className='w-100 text-center mb-4'>
                    <button className='approve_btn mt-3 px-5'>SOLD CARGO = <span className='text-warning'>0 BNB</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='yellow_border container px-4 mt-4'>
          <div className='blue_border'>
            <div className='rewards'>
              <div className='yellow_border2 m-3'>
                <div className='deposits_text'>
                  <p className='mb-0 mt-3'>REWARDS <br />
                    CUT-OFF</p>
                  <p className='text-warning'>( _ _ : _ _ : _ _ )</p>
                </div>
              </div>
              <div className='yellow_border2 m-3'>
                <div className='deposits_text'>
                  <p className='mb-0 mt-3'>REFERRAL BONUS</p>
                  <div className='mx-5'>
                    <img width="100%" src="./images/deposit_bottom_border.png" alt="" />
                  </div>
                  <p className='text-warning'>0 = 0 BNB</p>
                </div>
              </div>
              <div className='yellow_border2 m-3'>
                <div className='deposits_text'>
                  <p className='mb-0 mt-3'>WITHDRAW<br />
                    COOL-DOWN</p>
                  <p className=' text-warning'>( _ _ : _ _ : _ _ )</p>
                </div>
              </div>
            </div>
            <div className='yellow_border2 link mb-4'>
              <div className='referral_link'>
                <p className='text-center text-warning mb-1'>8% REFERRAL BONUS ON ALL DEPOSITS - COPY & SHARE</p>
                <button className='link_copy fs-5 mb-2'>REFERRAL LINK</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container yellow_border px-0 px-md-4 px-lg-4 mt-5'>
        <div className='imp_notes'>
          <div className='yellow_border3 mx-2 mx-md-5 mx-lg-5 my-3'>
            <div className='notes px-2 px-md-5 px-lg-5 py-3'>
              <p className='text-white text-center fs-5'>Important Note!</p>
              <p className='text-center text-warning mb-3'>To ensure sustainability and longevity of the project, AND as an enhancement from the
                previous similar miner games, The Infinity Project Team has implemented some features that
                encourage players to continuously compound before taking profits.
              </p>
              <p className='text-center text-warning mb-3'>Players should compound 12 times before they withdraw rewards. That’s 2 times a day for 6
                days. Should a player decide not to compound/re-supply using their rewards/today’s haul,
                and continuously withdraws, the player will be charged a 75% tax that will be divided into the
                following: 50% back into the miner contract TVL, 20%Treasury, 5% Dev / Marketing.</p>
              <p className='text-center text-warning mb-3'>In Addition, to further encourage the community to compound/re-supply, there will be an extra
                2% bonus for each compound action that the player does, which can stack up to a max of 24%
                for 12 consecutive compounds over the 6 days. By doing so, this will ensure sustainable,
                long-term potential profit for every player.
              </p>
              <p className='text-center text-warning mb-3'>The best strategy that the team can recommend is to compound/re-supply for 6 days and
                withdraw/sell cargo 1 day a week. This will increase the players investment at the same time
                increasing the daily yield earnings. This strategy has already been tried and tested by several
                other projects and is proven effective.
              </p>
              <p className='text-center text-warning mb-3'>Every time you compound/re-supply, the compound timer will reset and your re-supply bonus
                increases by 2% (max 24%). Withdrawing/selling cargo resets your compound bonus to 0.
              </p>
              <p className='text-center text-warning mb-3'>And as an additional bonus, players will earn an extra 8% when someone uses your referral link!
                So copy and share away. Let’s build a galaxy of limitless possibilities!
              </p>
              <p className='text-white text-center fs-5'>High Risk!</p>
              <p className='text-center text-warning mb-3'>Funds that are used to initially deposit/launch cargo fleet (including re-supply) cannot be
                withdrawn, however, your fleet will indefinitely work and acquire more cargo. Please use the
                application at your own risk.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container yellow_border mt-5'>
        <div className='blue_border mx-0 mx-md-3 mx-lg-3 p-2 p-md-3 p-lg-4'>
          <div className='yellow_border3 w-100'>
            <div className='faqs p-3'>
              <p className='fs-4 text-center text-white'>FAQ</p>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is The Infinity Project?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quos numquam facilis, sequi quasi cumque iste error, ducimus illo ab tempora repellat? Ea, impedit! Nesciunt at ratione ducimus atque asperiores?
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What is Infinity Miner?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, inventore suscipit. Culpa libero tempora repellendus hic ipsum deserunt ducimus voluptas, totam optio laborum, velit nobis cupiditate dolore officiis inventore modi!
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What makes this different from similar platforms?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, reiciendis distinctio ullam quia voluptates eum reprehenderit, nesciunt, aspernatur a cum eos repudiandae accusamus praesentium quae odio! Obcaecati sunt quibusdam laborum.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      How does the platform work?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, reiciendis distinctio ullam quia voluptates eum reprehenderit, nesciunt, aspernatur a cum eos repudiandae accusamus praesentium quae odio! Obcaecati sunt quibusdam laborum.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      What is the recommended strategy?
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, reiciendis distinctio ullam quia voluptates eum reprehenderit, nesciunt, aspernatur a cum eos repudiandae accusamus praesentium quae odio! Obcaecati sunt quibusdam laborum.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 container buttons'>
        <div className='button_border'>
          <img src="./images/button-border.png" alt="" />
          <p className='mb-0 button_text text-center fs-6'>WHITE PAPER</p>
        </div>
        <div className='button_border'>
          <img src="./images/button-border.png" alt="" />
          <p className='mb-0 button_text text-center fs-6'>DISCORD</p>
        </div>
        <div className='button_border'>
          <img src="./images/button-border.png" alt="" />
          <p className='mb-0 button_text text-center fs-6'>TWITTER</p>
        </div>
        <div className='button_border'>
          <img src="./images/button-border.png" alt="" />
          <p className='mb-0 button_text text-center fs-6'>TELEGRAM</p>
        </div>
      </div>

      <div className='logo text-center mt-5'>
        <img width="100%" src="./images/logo-3.png" alt="" />
      </div>

      <div className='footer mt-5 d-flex justify-content-center align-items-center flex-column'>
        <div className='arial_yellow mb-3'>
          <div className='arial_blue p-3' style={{ width: "max-content" }}>
            <p className='mb-0 fs-5 infinity_miner'>INFINITY MINER</p>
          </div>
        </div>
        <div className='mb-5 recycle'>
          <img width="280px" src="./images/recycle.png" alt="" />
        </div>
        <div className='arial_yellow2 mb-5'>
          <div className='arial_blue p-3' style={{ width: "max-content" }}>
            <p className='mb-0 fs-5 infinity_miner px-5'>TREASURY</p>
          </div>
        </div>
        <div className='arial_yellow3 mb-5'>
          <div className='arial_blue p-3' style={{ width: "max-content" }}>
            <p className='mb-0 fs-5 infinity_miner'>INFINITY SWAP</p>
          </div>
        </div>
      </div>

      <div className='copyright text-white pb-3 text-center'>
        <p className='fs-6'>© copyright- <span className='text-warning'>The Infinity Project Team</span>- all rights reserved</p>
      </div>
    </div>
  );
}

export default App;
