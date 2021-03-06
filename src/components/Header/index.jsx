import { BellOutlined, DownOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Dropdown, Input, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import menu from '../../components/menu'

const HeaderComponent = () => {
  return (
    <HeaderStyled>
      <Col span={18}>
        <img style={{ marginLeft: '10px' }} width={20} src={logo} alt="" />
        <ButtonStyled>
          <img
            src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.d947df93bc055849898e.gif"
            width={75}
            alt=""
          />
        </ButtonStyled>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Workspaces <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Recent <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Started <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <ButtonStyled>
            Template <DownOutlined />
          </ButtonStyled>
        </Dropdown>
        <ButtonStyled>Create</ButtonStyled>
      </Col>
      <Col span={6}>
        <FlexBox justifyContent="space-evenly">
          <SearchStyled placeholder="Search" prefix={<SearchOutlined />} />
          <InfoCircleOutlined style={{ fontSize: '20px' }} />
          <BellOutlined style={{ fontSize: '20px' }} />
          <Avatar
            size="small"
            icon={
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GhTFDRxiaqfQF8lEYZ5OXYPbevPW6eX9jeeQvnOBw=s96-c-rg-br100"
                alt=""
              />
            }
          />
        </FlexBox>
      </Col>
    </HeaderStyled>
  )
}

const HeaderStyled = styled(Row)`
  background: rgb(26, 19, 95);
  background: linear-gradient(90deg, rgba(26, 19, 95, 1) 0%, rgba(96, 35, 88, 1) 100%);
  padding: 0;
  color: white;
  height: 44px;
  align-items: center;
`

const ButtonStyled = styled(Button)`
  background-color: transparent;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #635a8e;
    color: #ffffff;
  }
`

const FlexBox = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`

const SearchStyled = styled(Input)`
  width: 65%;
`

export default HeaderComponent
