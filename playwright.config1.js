// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { snapshot } from 'node:test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 50*1000,
  retries :1,
  expect :{
    timeout: 40*1000,
  },
  reporter:'html',
  
    projects:[
      {
        name:'safari',
  use: {
    
        browserName: 'webkit',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        trace:'retain-on-failure'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  }},
  {
        name:'chrome',
  use: {
    
        browserName: 'chromium',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        trace:'retain-on-failure'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  }}],

});
module.exports =config

