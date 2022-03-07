import axios from "axios";
import { DISCORD_API_URL } from "../../utils/Constants";
import { User } from "../../database/exports";
import { PartialGuild } from "../../utils/Types";

export function getBotGuilds() {
    return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` }
    })
}

export async function getUserGuilds(id: string) {
    const user = await User.findById(id);
    if(!user) throw new Error('No user found.');
    return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: { Authorization: `Bearer ${user.accessToken}` }
    })
}

export async function getMutualGuildsService(id: string) {
    const { data: botGuilds } = await getBotGuilds();
    const { data: userGuilds } = await getUserGuilds(id);
    const adminUserGuilds = userGuilds.filter(
      ({ permissions }) => (parseInt(permissions) & 0x8) === 0x8
    );
    return adminUserGuilds.filter((guild) =>
      botGuilds.some((botGuild) => botGuild.id === guild.id)
    );
  }
  
export function getGuild(id: string) {
    return axios.get<PartialGuild>(`${DISCORD_API_URL}/guilds/${id}`, {
      headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` },
    });
}