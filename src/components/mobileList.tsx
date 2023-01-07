import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import chevron from "../assets/icon-chevron.svg";

export default function MobileList({showList, setShowList}: any) {

    let handleClick = () => {
        setShowList(false)
    }

  return (
    <MainMob>
      <Line />
      <Ul>
        <Li>
          <ItemBox>
            <Item></Item>

            <Link
              to="/"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Mercury
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item1></Item1>
            <Link
              to="venus"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Venus
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item2></Item2>
            <Link
              to="earth"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Earth
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item3></Item3>
            <Link
              to="mars"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Mars
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item4></Item4>
            <Link
              to="jupiter"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Jupiter
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item5></Item5>
            <Link
              to="saturn"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Saturn
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item6></Item6>
            <Link
              to="uranus"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Uranus
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
        <Li>
          <ItemBox>
            <Item7></Item7>
            <Link
              to="neptune"
              onClick={handleClick}
              style={{ color: "white", textDecoration: "nones" }}
            >
              Neptune
            </Link>
          </ItemBox>
          <Img src={chevron} />
        </Li>
      </Ul>
    </MainMob>
  );
}

const MainMob = styled.div`
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 20%;
  margin-bottom: 24px;
`;

const Li = styled.li`
  color: white;

  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  width: 100%;
`;
const ItemBox = styled.div`
  width: 50%;

  display: flex;
  margin-left: 24px;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const Item = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #def4fc;
`;
const Item1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f7cc7f;
`;
const Item2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #545bfe;
`;
const Item3 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff6a45;
`;
const Item4 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ecad7a;
`;
const Item5 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fccb6b;
`;
const Item6 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #65f0d5;
`;
const Item7 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #497efa;
`;
const Img = styled.img`
  margin-right: 24px;
`;
