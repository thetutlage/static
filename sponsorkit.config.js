import { defineConfig, presets } from 'sponsorkit'
import sponsorsList from './platinum_sponsors.json'

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 19,
      preset: presets.medium,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 29,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: Infinity,
      preset: presets.xl,
      composeAfter(compose) {
        compose.addTitle('Platinum Sponsors').addSponsorGrid(sponsorsList, presets.xl)
      },
    },
  ],
})
