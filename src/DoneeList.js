import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, 
    Text, Left, Body, Right, Button, Icon,Footer,FooterTab, Title 
  } from 'native-base';
export default class DoneeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      doneeList: [],
    };
  }

  loadDonees() {
    fetch('http://13.233.155.46:3000/api/ngo_details', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          doneeList: res,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  render() {
    this.loadDonees();
    return (
      <Container>
        <Content>
          <Text>
            {'\t\t\t'}BEST DONEE(S) FOR YOU
            {this.props.navigation.state.params.itemData.user.name}
          </Text>
          <List>
            <ListItem thumbnail onPress={() => {this.props.navigation.navigate('DoneeDetail', {item: this.props.navigation.state.params.itemData})}}>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/jpeg;base64,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' }} />
              </Left>
              <Body>
                <Text>Akshaya Paatra</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                  <Text>4.5</Text><Icon name='star'/>
              </Right>
            </ListItem>
            <ListItem thumbnail onPress={() => {this.props.navigation.navigate('DoneeDetail')}}>
              <Left>
                <Thumbnail square source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAdCAMAAAB/qGXLAAAArlBMVEX////29vbaKR0AAADj39br6+vXAADh4eHZGADaJhnn5+fy8vLYDADZIhN/f3/a2tr98PA9PT25ublhYWH54N/96+v/+fmrq6vPz89bW1vYHAqxsbHGxsa/v78ZGRl4eHjrmJPxtrOKioqcnJzcMChwcHAyMjL3zMzrj46SkpJLS0viYFn51dXzpabwrazlZWXeQj3gUEbnennkbWrqh4Pldm/jVVLcOzL0wb4lJSWgJZyMAAAEi0lEQVRYhc2Y63aqOhCAB3IIAYKggEK8gVqhgoiAl77/i50JWG337tlr/zh2NXbhhEzM17kxCpryrQP+cvy14veOH47lJ8Gzj9IeYrEv924vpeM/YJWUs73/XKx/HqLKOS3wfXygtCr+Cys5clU1GK2u34NVM1XlPgTZBgWb2pkLbtlU6iZ/Nw1iBXmZ4LIq2hM9BVnydKxMGoEG+3N6sPFcuzVEfGjSwC/2F9p0waSM0zyAKyqqLINEVWn7ZCy3llRV0+4BconFC/fAa37oVhPBO6ceaYyqzMBltNOJHb8Mwf8Pyzd6z7AKJy3rsJCPXW7uCy5c2qu1eTuGPRX8OB6fuGo/LfB7rJSraAJWc3YOwOfCYDlAbPP8Xc0VaLegKRg/XuFax0FaMbvIOyeaq+Wr+eWHm4MPiQ7aejmYwmiNojWwJhN5bz36IxbllWqcz/6GbRIozpeT6x84i9k93VLqQ3yFlKGlsjI+c5vtIanQi9bi7WW4/P2TnTmExHnMQ0KGQxIOtijrb3oUyZvbLzZ+wFL3vhCnGnzb5ufSL9JaCJ5Bc7orHjNASyKXYQsmbNXGwAo2rjzOs7D8mevR1JxoMAqVyRqNpG1fRiGZrUOA2SteYEHw6liDYbi2lCl4HijTyXagTbW1Za0nCszD0fQzlutCwMQBbVMIw+accaHaaIrOHP1ILiC6dxl5MhcxOaCSEecR4ikK2b2Q+XBgktEuWm81mJDdckZ2O6KtF5PFDDTSG2ZAPOLpxEEsbzEgqzl5I/PFcrVVFrjy+gkLh88vZxnBKe+P7ZLNN9zHOrBO6OoHYsncPHaFYxSRaEQUILM5WQ4dEiEgYkzBIbpJwsVwuY3AIlGPNYTVFhc8ZJvDcDAjM2VKvBcy277Azvsd67jpEmvfm8O4uDIDi6LwAxfLV8CgT7xadOvdJEcd7VWzFos5MS0yA0ImDplougkmWaN/dZ2Eb56mof92ZKU7q3D1jhXpCL5FLAVGZKQ52tsSoq+wLmkXZ7Q/9oxycE7T0i+v2fVa2HAsuyDrrSV8mZo4t7aE4AFDsiMDWOEhy8XLLgRlR4Zz4ujShF60wmKMzibEwZBfvTnEmZDZSm6Z4w6IcIuzQGtFv2IV6MTu2LL3oi2Lg9/A2HUDfPlFBfEFb42F0fsY/4ey26DoDoa44miaBYqsFLojr4qjKzpOFNCcPiFNR8fkMMEyFbwr13RTkzoohZg03d9vWHYjiylk4oFV7u+ZmGbgUwy3gN5CPsZn+pOrfIclaiq9mPdOMiqMm+Ye8VCj01p8lPs3LMROntdE3LFSbhzzDQpV7yQZPNf4rufmsoOo1MK9YRnimS3XByx8+DCM4c0Ni5cQP5zU+BLLrXhs3woIe1r78AuWqra0Gb9by84/6klA2QbGlAkDh+B2+R1Yso2y8yvdXNR3L7VJb62g7DuJrjvF1vBiqJcmeVq4f8aiQrAjBDXlwrZtQXnWUDXP9tlZUKO4Y33PuHceRdvWtQwXt6zzc94mmITXA6eUGs0t437QF7LAfzjrB2F9HD8U62f+BvEvzZtp56IQ14oAAAAASUVORK5CYII=' }} />
              </Left>
              <Body>
                <Text>Save the Children</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text>4.5</Text><Icon name='star'/>
              </Right>
            </ListItem>
            <ListItem thumbnail onPress={() => {this.props.navigation.navigate('DoneeDetail', {item: this.props.navigation.state.params.itemData})}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/717281826335629312/sm-e_TTy_400x400.jpg' }} />
              </Left>
              <Body>
                <Text>Smile</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text>4.5</Text><Icon name='star'/>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://lh3.googleusercontent.com/-0qfsYCLCXmc/AAAAAAAAAAI/AAAAAAAAAAA/uiPzAv7CzGk/s44-p-k-no-ns-nd/photo.jpg' }} />
              </Left>
              <Body>
                <Text>Small Change</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text>4.3</Text><Icon name='star'/>
              </Right>
            </ListItem>
            <Text>
              {'\t\t\t'}MORE DONEE(S) NEAR YOU
            </Text>
            <ListItem thumbnail onPress={() => {this.props.navigation.navigate('DoneeDetail', {item: this.props.navigation.state.params.itemData})}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/717281826335629312/sm-e_TTy_400x400.jpg' }} />
              </Left>
              <Body>
                <Text>Smile</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text>4.2</Text><Icon name='star'/>
              </Right>
            </ListItem>
            <ListItem thumbnail onPress={() => {this.props.navigation.navigate('DoneeDetail', {item: this.props.navigation.state.params.itemData})}}>
              <Left>
                <Thumbnail square source={{ uri: 'https://lh3.googleusercontent.com/-0qfsYCLCXmc/AAAAAAAAAAI/AAAAAAAAAAA/uiPzAv7CzGk/s44-p-k-no-ns-nd/photo.jpg' }} />
              </Left>
              <Body>
                <Text>Small Change</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Text>4</Text><Icon name='star'/>
              </Right>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
            <Button vertical>
              <Icon active name="pizza" />
              <Text>Donate Meal</Text>
            </Button>
            <Button vertical>
              <Icon name="alert" />
              <Text>Alerts</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
