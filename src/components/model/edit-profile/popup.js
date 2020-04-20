import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tab, Tabs } from 'react-bootstrap'
import IcModal from 'components/lib/modal'

export default function ModelEditProfilePopup(props) {
  const { t } = useTranslation()

  return (
    <IcModal icon="cog" btnText={t('profile.button')}>
      <>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <h1>TEST 1</h1>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <h1>TEST 2</h1>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <h1>TEST 3</h1>
          </Tab>
        </Tabs>
      </>
    </IcModal>
  )
}
