<script setup lang="ts">
import {Accordion, AccordionContent, AccordionHeader, AccordionPanel, Button} from "primevue";

</script>

<template>
    <section class="w-full">
        <div class="container">
            <div class="py-16 md:py-6">
                <h2 class="text-color-gradient font-semibold text-[40px] text-center mb-6 py-1 md:text-[30px]
          sm:text-[25px] xs:text-[20px] sm:leading-snug">Q & Al</h2>
                <div class="px-16 py-10 mb-10 lg:px-0 md:mb-0 md:py-4">
                    <Accordion>
                        <AccordionPanel v-for="n in 9" :value="n" class="border-b border-solid border-white mb-8">
                            <AccordionHeader class="bg-black border-none rounded-none px-0 py-6">
                                <span class="text-white text-lg font-normal md:text-base xs:text-sm">
                                Что такое Solidton?
                                </span>
                            </AccordionHeader>
                            <AccordionContent class="px-0">
                                <div class="bg-black">
                                    <span class="text-white text-sm xs:text-xs">
                                        Jetton Solidton is a cryptocurrency created on the TON blockchain specifically for the DeFi sector. It offers users a range of features, including p2p lending, yield farming, staking, its own DEX exchange and wallet, an aggregator, and credit cards.
                                    </span>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
                <div class="flex justify-center items-center py-16 md:py-6">
                    <Button class="px-[3.75rem] py-4 text-white cursor-pointer lg:py-3 lg:text-base sm:text-sm sm:py-2" severity="contrast" rounded label="Show more"/>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css">
.p-accordioncontent-content {
    background: black;
    border: none;
    padding-left: 0;
    padding-right: 0;
}
</style>
