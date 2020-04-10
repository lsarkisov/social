import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as Lighting } from 'assets/img/icons/lighting.svg'
import { ReactComponent as Tag } from 'assets/img/icons/tag.svg'
import { ReactComponent as BusinessMan } from 'assets/img/icons/business-man-throwing-papers.svg'
import { ReactComponent as Shield } from 'assets/img/icons/shield.svg'
import { ReactComponent as Ours } from 'assets/img/icons/24-hours.svg'
import { ReactComponent as Crown } from 'assets/img/icons/crown.svg'
import { ReactComponent as World } from 'assets/img/icons/world.svg'
import { ReactComponent as Muscle } from 'assets/img/icons/muscle.svg'
import { ReactComponent as Money } from 'assets/img/icons/money-bag-with-dollar-symbol.svg'
import { ReactComponent as Ascend } from 'assets/img/icons/ascend.svg'
import { ReactComponent as People } from 'assets/img/icons/people.svg'

export default function AuthMainCustomers(props) {
  return (
    <div className="main-page__customers">
      <h2 className="center">
        For the <span className="sub-text">booker</span>
      </h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>From weeks to minutes!</dt>
            <dd className="custom-card__image">
              <Lighting />
            </dd>
            <dd>
              shorten the recruitment process and save time for the fun stuff.
              Easy to register and even easier to use!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Always free!</dt>
            <dd className="custom-card__image">
              <Tag />
            </dd>
            <dd>
              You only pay the model for their work. We don’t charge you for
              using the service.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>No more paperwork!</dt>
            <dd className="custom-card__image">
              <BusinessMan />
            </dd>
            <dd>
              Our system takes care of everything. GDPR, model release,
              contracts, you name it!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Your safety is our priority!</dt>
            <dd className="custom-card__image">
              <Shield />
            </dd>
            <dd>
              Recruit without hesitation thanks to our rating & feedback system,
              and our safe escrow payment method.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Always accessible!</dt>
            <dd className="custom-card__image">
              <Ours />
            </dd>
            <dd>
              Our digital solution gives you a 24 hour access to our users. No
              need to panik!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Diversity is our motto!</dt>
            <dd className="custom-card__image">
              <People />
            </dd>
            <dd>
              Iconicli welcomes all looks. This gives you a uniquely diverse
              database of icons to choose from.
            </dd>
          </dl>
        </Col>
      </Row>
      <h2 className="center">
        For the <span className="sub-text">model</span>
      </h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>find jobs worldwide</dt>
            <dd className="custom-card__image">
              <World />
            </dd>
            <dd>
              Find and apply to any job you want. No matter the location or
              industry. We do not restrict you in any way!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>you are more than enough</dt>
            <dd className="custom-card__image">
              <Crown />
            </dd>
            <dd>
              No matter your looks, you are always welcomed! Professionals,
              amateurs, new faces and first timers. All can use and benefit from
              Iconicli.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Be your own boss</dt>
            <dd className="custom-card__image">
              <Muscle />
            </dd>
            <dd>
              No one tells you how to look, dress, be or anything for that
              matter! You control and manage your own carrier, however you like!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Your safety is our priority!</dt>
            <dd className="custom-card__image">
              <Shield />
            </dd>
            <dd>
              Freelance without hesitation thanks to our rating & feedback
              system, and our safe escrow payment method.
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>Make money</dt>
            <dd className="custom-card__image">
              <Money />
            </dd>
            <dd>
              Keep the majority of your earnings for the work you do. Iconicli
              keeps only 20% of the payment in order to keep giving you more
              jobs and the best service on the planet!
            </dd>
          </dl>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <dl className="custom-card">
            <dt>climb the carrier ladder</dt>
            <dd className="custom-card__image">
              <Ascend />
            </dd>
            <dd>
              YOU WANNA BE ON TOP? climb the industry ladder by taking on more
              jobs, perform well and increase your ratings and reputation to get
              the bigger jobs!
            </dd>
          </dl>
        </Col>
      </Row>
    </div>
  )
}
