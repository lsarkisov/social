import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tab, Tabs } from 'react-bootstrap'
import IcModal from 'components/lib/modal'
import ModelEditProfilePortfolio from 'components/model/edit-profile/portfolio'
import ModelEditProfileProfile from 'components/model/edit-profile/profile'

export default function ModelEditProfilePopup(props) {
  const { t } = useTranslation()

  return (
    <IcModal icon="cog" btnText={t('profile.button')}>
      <>
        <Tabs
          className="popup-tabs"
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="1" title={t('profile.popup.tabs.btn1')}>
            <h1>TEST 1</h1>
          </Tab>
          <Tab eventKey="2" title={t('profile.popup.tabs.btn2')}>
            <ModelEditProfilePortfolio />
          </Tab>
          <Tab eventKey="3" title={t('profile.popup.tabs.btn3')}>
            <ModelEditProfileProfile />
          </Tab>
        </Tabs>
      </>
    </IcModal>
  )
}
