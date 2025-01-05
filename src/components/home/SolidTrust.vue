<script setup lang="ts">
import {Button} from "primevue";
</script>

<template>
    <section>
        <div class="container">
            <div class="flex pt-3 justify-between items-center pb-16">
                <div class="w-[40%] flex justify-center items-center pt-16">
                    <video src="@/assets/video/trust.webm" loop autoplay muted/>
                </div>
                <div class="w-[52%] pb-4 pt-24 pl-2">
                    <h2 class="text-[40px] text-color-gradient font-semibold pt-3 pr-8 mb-10 leading-[3.255rem]">SolidTrust: Trust and Secure Blockchain</h2>
                    <div class="mb-14">
                        <p class="text-white mb-8 leading-[31.5px]">SolidTrust is a unique decentralized system that analyzes the actions
                            of users, projects, and tokens, assigning them a trust rating (SolidScore).
                            This rating is updated in real-time, ensuring security, transparency, and reliability
                            for all participants in the SolidChain network.</p>
                        <p class="text-white mb-6 leading-[31.5px]">Join SolidTrust to experience safe, transparent, and reliable blockchain interactions like never before.</p>
                    </div>
                    <Button class="px-[3.75rem] py-4 text-white" severity="contrast" rounded label="Learn More"/>
                </div>
            </div>
        </div>
    </section>
</template>