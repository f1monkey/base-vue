FROM node:13.5-buster

RUN apt-get update

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8 \
    APP_TIMEZONE=Etc/UTC \
    PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/srv/bin \
    COMMON_PACKAGES="yarn git bash bash-completion nano vim curl coreutils unzip tzdata net-tools openssh-client openrc sudo" \
    X_SERVICE_PACKAGES="libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 libx11-xcb-dev libgtk-3-0 x11-apps"

RUN apt-get update \
    && apt-get -y install ${COMMON_PACKAGES} ${X_SERVICE_PACKAGES}\
    && ln -fs /usr/share/zoneinfo/${APP_TIMEZONE} /etc/localtime \
    && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers


USER root
RUN apt-get install sudo \
    && echo 'node ALL=NOPASSWD: ALL' > /etc/sudoers.d/node \
    && chmod 0440 /etc/sudoers.d/node \
    && visudo --check \
    && chown -R node:node /mnt \
    && chown -R node:node /srv \
    && chown -R node:node /opt

USER node
COPY --chown=node:node ./ /srv/

WORKDIR /srv
CMD bash -c "yarn && yarn dev"
