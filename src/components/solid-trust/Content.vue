<script setup lang="ts">

</script>

<template>
  <section class="py-14 lg:py-10">
    <div class="container">
      <!--      <InfoCardList :content="content" title="Wallet Features:"/>-->
      <div class="mb-10">
        <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
            lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">How Does SolidTrust Work?</h2>
        <div class="grid grid-cols-[1fr_2fr] w-full gap-6 lg:grid-cols-1">
          <div class="grid grid-rows-2 gap-6 h-full lg:grid-rows-1">
            <div class="bg-[#020202] rounded-[20px] border border-solid border-[#323232] py-8 px-6 md:py-6 md:px-4">
              <h6 class="font-semibold text-[24px] text-white mb-6 lg:text-xl md:text-lg">Assigning SolidScore <br>(Trust Rating)</h6>
              <div class="flex flex-col">
                <p class="text-white mb-4">Every user, project, and token on the SolidChain blockchain receives a SolidScore based on their actions. This rating:</p>
                <ul class="mb-4">
                  <li> • Automatically updates in real time.</li>
                  <li> • Is calculated using algorithms that analyze network data.</li>
                </ul>
                <span class="mb-4">Factors Affecting SolidScore:</span>
                <div class="flex flex-col py-2">
                  <span class="mb-4">For Users:</span>
                  <ul class="mb-4">
                    <li> • Successful transactions (on time and error-free).
                    </li>
                    <li> • Participation in DAO voting and other activities.
                    </li>
                    <li> • Address lifespan (the longer it exists, the higher the trust).
                    </li>
                    <li> • Positive feedback from other participants.
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col py-2">
                  <span class="mb-4">For Projects:</span>
                  <ul class="mb-4">
                    <li> • Transparency of smart contract code.</li>
                    <li> • Absence of suspicious functions (e.g., hidden fund withdrawals).</li>
                    <li> • Regular activity and updates.</li>
                    <li> • Positive interactions with users.</li>
                  </ul>
                </div>
                <div class="flex flex-col py-2">
                  <span class="mb-4">For Tokens:</span>
                  <ul>
                    <li> • Fair distribution without manipulations.</li>
                    <li> • Resistance to fraudulent schemes (e.g., rug-pull, pump-and-dump).</li>
                    <li> • Regular activity and updates.</li>
                    <li> • Trading volume and liquidity.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-[#020202] rounded-[20px] border border-solid border-[#323232] py-8 px-6 md:py-6 md:px-4">
              <h6 class="font-semibold text-[24px] text-white mb-6 lg:text-xl md:text-lg">Technological Foundation</h6>
              <div class="flex flex-col">
                <p class="text-white mb-4">SolidTrust is based on three key components:</p>
                <div class="flex flex-col py-2">
                  <span class="mb-4">1. SolidTrust Smart Contracts:</span>
                  <ul class="mb-4">
                    <li> • All participant actions are analyzed and recorded on the blockchain.
                    </li>
                    <li> • Smart contracts automatically recalculate ratings based on predefined rules.
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col py-2">
                  <span class="mb-4">2. AI Algorithms (Machine Learning):</span>
                  <ul class="mb-4">
                    <li> • Detect suspicious behavior, such as:</li>
                    <li> • Frequent transaction cancellations.</li>
                    <li> • Abnormally large or rapid fund transfers.</li>
                    <li> • Analyze smart contract code to identify vulnerabilities or fraudulent functions.</li>
                  </ul>
                </div>
                <div class="flex flex-col py-2">
                  <span class="mb-4">3. Transparent Metadata:</span>
                  <ul>
                    <li> • All ratings and changes are stored on the blockchain, making them accessible for verification by any user.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#020202] rounded-[20px] border border-solid border-[#323232] py-8 px-6 md:py-6 md:px-4">
            <h6 class="font-semibold text-[24px] text-white mb-6 lg:text-xl md:text-lg">Review and Voting Mechanism</h6>
            <div class="flex flex-col">
              <span class="mb-5">If a participant believes their rating was unfairly lowered, they can appeal:</span>
              <div class="flex flex-col py-2">
                <span class="mb-4">1. Appeal through SolidTrust DAO:</span>
                <ul class="mb-4">
                  <li> • The community votes to review the rating.</li>
                  <li> • This ensures fairness and eliminates human bias.</li>
                </ul>
              </div>
              <div class="flex flex-col py-2">
                <span class="mb-4">2. Automatic Updates:</span>
                <ul class="mb-4">
                  <li> • If suspicions are proven false, the rating is restored without manual intervention.</li>
                </ul>
              </div>
              <span class="mb-4">Benefits of SolidTrust</span>
              <span class="mb-4">For Users:</span>
              <div class="flex flex-col py-2">
                <span class="mb-2"> 1. Security:</span>
                <ul class="mb-4">
                  <li> • Users can view counterparties’ ratings before a transaction.</li>
                  <li> • Reduces the risk of interacting with fraudsters.</li>
                </ul>
                <span class="mb-2"> 2. Transparency:</span>
                <ul class="mb-4">
                  <li> • All rating information is available for verification on the blockchain.</li>
                </ul>
                <span class="mb-2"> 3. Trust in the Ecosystem:</span>
                <ul class="mb-4">
                  <li> • SolidTrust makes the SolidChain network attractive to new participants.</li>
                </ul>
              </div>
              <span class="mb-4">For Projects:</span>
              <div class="flex flex-col">
                <span class="mb-2"> 1. Increased Trust:</span>
                <ul class="mb-4">
                  <li> • A high SolidScore attracts investors and partners.</li>
                </ul>
                <span class="mb-2"> 2. Cost Savings:</span>
                <ul class="mb-4">
                  <li> • No need to rely on centralized auditors.</li>
                </ul>
                <span class="mb-2"> 3. Reputation Growth:</span>
                <ul class="mb-4">
                  <li> • Honest projects receive well-deserved recognition.</li>
                </ul>
              </div>
              <span class="mb-4">For the SolidChain Ecosystem:</span>
              <div class="flex flex-col py-2">
                <span class="mb-2"> 1. Fraud Prevention:</span>
                <ul class="mb-4">
                  <li> • SolidTrust automatically identifies and blocks suspicious participants.</li>
                </ul>
                <span class="mb-2"> 2. Scalability:</span>
                <ul class="mb-4">
                  <li> • The system handles millions of users and projects without delays.</li>
                </ul>
              </div>
              <span class="mb-4">Problems Solved by SolidTrust</span>
              <div class="flex flex-col">
                <span class="mb-2">1. Fraud in the Crypto Industry</span>
                <ul class="mb-4">
                  <li> • Fraudsters create tokens with exaggerated promises or hidden scams.</li>
                  <li> • SolidTrust verifies smart contracts to detect such projects before they cause harm.</li>
                </ul>
                <span class="mb-2">2. Lack of Trust</span>
                <ul class="mb-4">
                  <li> • Many newcomers fear joining the crypto industry due to high risks.</li>
                  <li> • SolidTrust creates a safe space where participants can trust one another.</li>
                </ul>
                <span class="mb-2">3. High Audit Costs</span>
                <ul class="mb-4">
                  <li> • Projects often spend thousands on audits to prove their reliability.</li>
                  <li> • SolidTrust performs this automatically and for free.</li>
                </ul>
              </div>
              <span class="mb-4">Challenges and Solutions</span>
              <div class="flex flex-col py-2">
                <span class="mb-2">1. System Manipulation:</span>
                <ul class="mb-4">
                  <li> • Challenge: Fraudsters may attempt to manipulate their ratings.</li>
                  <li> • Solution: AI algorithms detect anomalies, and manual reviews address edge cases.</li>
                </ul>
                <span class="mb-2">2. Algorithm Errors:</span>
                <ul class="mb-4">
                  <li> • Challenge: Honest users may have their ratings unfairly lowered.</li>
                  <li> • Solution: A DAO-based appeal mechanism ensures fairness.</li>
                </ul>
                <span class="mb-2">3. High Audit Costs</span>
                <ul class="mb-4">
                  <li> • Projects often spend thousands on audits to prove their reliability.</li>
                  <li> • SolidTrust performs this automatically and for free.</li>
                </ul>
              </div>
              <span class="mb-4">Network Load:</span>
              <ul class="mb-4">
                <li> • Challenge: Analyzing millions of transactions may cause delays.</li>
                <li> • Solution: Optimized algorithms and decentralized computing ensure scalability.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="px-[105px] pt-16 pb-12 lg:px-0 lg:pt-10 md:pt-4 lg:pb-10 sm:pb-4">
        <div>
          <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
            lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">How SolidTrust Changes the Future</h2>
          <div class="px-40 flex justify-center flex-col items-center lg:px-0">
            <ul class="flex flex-col items-center list-disc gap-y-6 justify-center text-center mb-16 lg:px-4 px-20">
              <li class="text-center text-[#66B5FF] sm:text-sm">Helps users make informed decisions.
              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm">Protects investors and projects from fraudsters.

              </li>
              <li class="text-center text-[#66B5FF] sm:text-sm"> Sets a new standard for the entire crypto industry.
              </li>
            </ul>
            <p class="text-white text-center sm:text-sm mb-20">SolidTrust makes SolidChain the safest and most transparent blockchain on the market. The system:</p>
          </div>
        </div>
        <div>
          <h2 v-scroll-reveal class="text-[36px] font-semibold text-color-gradient leading-[3.255rem] text-center mb-14 lg:text-[30px]
            lg:leading-[2.5rem] sm:text-[20px] lg:mb-8">Join the Revolution!</h2>
          <div class="px-40 flex justify-center flex-col items-center lg:px-0">
            <p class="text-white text-center sm:text-sm mb-10 px-40 sm:px-0">SolidTrust isn’t just a system—it’s the future of blockchain trust. Join SolidChain to build a secure crypto space with us.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


