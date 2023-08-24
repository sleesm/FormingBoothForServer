# 감각의 감각 of 포밍부스
![image](https://github.com/sleesm/formingbooth_server/assets/60386794/905b44d1-80d4-46a1-a7ed-f2683c9e13db)

**👀[GitHub for Server](https://github.com/sleesm/formingbooth_server) 🎫[전시 후기 링크](https://blog.naver.com/mcstkorea/222657513913) [🎞데모 영상](https://file.notion.so/f/s/7c57d6cb-0bd1-45a9-ba8b-5efe0ed24e31/%EA%B0%90%EA%B0%81%EC%9D%98_%EA%B0%90%EA%B0%81_%EC%8B%9C%EC%97%B0_%EC%98%81%EC%83%81.mp4?id=24e9eb84-7c8e-428f-9c1b-1063c8e4c381&table=block&spaceId=f833c68d-6d0d-4322-a6fd-0beb1962db26&expirationTimestamp=1692712800000&signature=WQV76HgAnaHAveYlFTJllLYbRCXY4eQ59lTMXKHnXgo&downloadName=%EA%B0%90%EA%B0%81%EC%9D%98+%EA%B0%90%EA%B0%81+%EC%8B%9C%EC%97%B0+%EC%98%81%EC%83%81.mp4)**


## Description 설명
```
2021년에 프로그래머로 진행했던 Art&Tech 전시 프로젝트입니다.
전시는 꿈에 관한 내용으로,오프라인과 온라인 전시를 동시에 진행하면서 인터렉션하는 체험을 구현했습니다.
```
> 전시 구성
> - 리셉션
> - 현실의 방 (아두이노와의 3D 인터렉션 체험)
> - 통로 (2D 체험)
> - 꿈의 방 (키넥트를 사용한 3D 인터렉션 체험, 전시 영상 온/오프라인 동시 상영)

## User Scenario 사용자 시나리오

![image](https://github.com/sleesm/FormingBoothForServer/assets/60386794/59a2cbb7-2cab-47d4-a3d0-6f175350e991)

## Tech Stack
### ✔️Frond-end

<img src="https://img.shields.io/badge/Unity-black?style=for-the-badge&logo=unity&logoColor=white"> <img src="https://img.shields.io/badge/arduino-00878F?style=for-the-badge&logo=arduino&logoColor=white">
**Kinect V2, Photon Network**

### ✔️Back-end
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> <img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"> **AWS CodeDepoly, AWS IAM**

### ✔️Arduino와 Unity 통신을 위한 MQTT 사용
**AWS IOT Core**

### ✔️시스템 아키텍처

![image](https://github.com/sleesm/FormingBoothForServer/assets/60386794/628cf1e3-e3e6-4707-8d28-5519c82e211f)
## Overview 
1. 현실의 방 체험 영상 (관객, 오퍼레인터 관점 모두 포함)

![현실의방](https://github.com/sleesm/FormingBoothForServer/assets/60386794/4bd829b7-719c-4981-936c-5d92fb0907ad)

2. 통로 2D 게임 체험 영상

![감각의 감각 시연 영상_1](https://github.com/sleesm/FormingBoothForServer/assets/60386794/d9f10113-460f-4d97-a46c-d55e8e0c988b)

3. 비눗방울 체험 영상 (오프라인, 온라인 관점 모두 포함)

![감각의 감각 시연 영상_2](https://github.com/sleesm/FormingBoothForServer/assets/60386794/2e81b60c-8d78-44ce-8275-332496a71434)

4. 의상실 체험 형상 (오프라인, 온라인 관점 모두 포함)

![감각의 감각 시연 영상_3](https://github.com/sleesm/FormingBoothForServer/assets/60386794/18c7402d-e817-4a25-b612-f134dda2ef42)

5. 실제 온라인 관객의 전시 체험 영상

![ezgif-4-fe9acb2189 (1)](https://github.com/sleesm/FormingBoothForServer/assets/60386794/6ea76314-8bf4-4929-b8d1-7ebd090c07cd)

