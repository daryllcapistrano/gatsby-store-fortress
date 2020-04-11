import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/fortress_collage" alt="twitter link">
    Twitter
  </a>
)
const instagramLink = (
  <a href="https://instagram.com/fortress_collage/" alt="instagram link">
    Instagram
  </a>
)
const emailLink = (
  <a href="mailto:fortresscollage@gmail.com" alt="email link">
    Email
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '0px',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacy
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terms
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                Our Products
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Fortress Skate Company</Header>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur veniam alias accusantium! Omnis voluptas asperiores
              quae optio, esse in ducimus amet accusamus consequatur
              exercitationem officia molestias minima labore, vero facere.
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="twitter"
                style={{display: 'flex'}}
                content={twitterLink}
              />
              <List.Item
                icon="instagram"
                style={{display: 'flex'}}
                content={instagramLink}
              />
              <List.Item
                icon="mail"
                style={{display: 'flex'}}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
