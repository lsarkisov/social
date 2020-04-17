import React from 'react'
import OnboardingNavbarLinks from 'components/onboarding/navbar/links'
import SocialLinks from 'components/social-links'

export default function OnboardingModel(props) {
  return (
    <div className="onboarding-navbar">
      <OnboardingNavbarLinks />
      <SocialLinks />
    </div>
  )
}
