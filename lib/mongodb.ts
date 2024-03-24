import { AboutMe } from "@/types/aboutMe";
import { Anime } from "@/types/anime";
import { Journey } from "@/types/journey";
import { Movie } from "@/types/movie";
import { Pokemon } from "@/types/pokemon/pokemon";
import { Skill } from "@/types/skill";
import { MongoClient} from "mongodb";

async function GetClient()
{
    return await MongoClient.connect(process.env.MongoConnection || '');
}

async function GetDB(db:string)
{
    const client = await GetClient();
    
    return client.db(db);
}

export async function GetAnimeCollection()
{
    const _db = await GetDB(process.env.AnimeDB || '');
    return _db.collection<Anime>(process.env.AnimeDB_Collection || '');
}

export async function GetPokemonCollection()
{
    const _db = await GetDB(process.env.PokemonDB || '');
    return _db.collection<Pokemon>(process.env.PokemonDB_Collection || '');
}

export async function GetMovieCollection()
{
    const _db = await GetDB(process.env.MovieDB || '');
    return _db.collection<Movie>(process.env.MovieDB_Collection || '');
}

export async function GetAboutmeCollection()
{
    const _db = await GetDB(process.env.CVDB || '');
    return _db.collection<AboutMe>(process.env.CVDB_AboutMe || '');
}

export async function GetJourneyCollection()
{
    const _db = await GetDB(process.env.CVDB || '');
    return _db.collection<Journey>(process.env.CVDB_Journeys || '');
}

export async function GetSkillCollection()
{
    const _db = await GetDB(process.env.CVDB || '');
    return _db.collection<Skill>(process.env.CVDB_Skills || '');
}