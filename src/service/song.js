import { get } from './base'

export async function processSongs(songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  const result = await get('/api/getSongsUrl', {
    mid: songs.map(song => {
      return song.mid
    }),
  })
  const map = result.map
  return songs
    .map(song_1 => {
      song_1.url = map[song_1.mid]
      return song_1
    })
    .filter(song_2 => {
      return song_2.url && song_2.url.indexOf('vkey') > -1
    })
}

const lyricMap = {}

export async function getLyric(song) {
  if (song.lyric) {
    return Promise.resolve(song.lyric)
  }
  const mid = song.mid
  const lyric = lyricMap[mid]
  if (lyric) {
    return Promise.resolve(lyric)
  }

  const result = await get('/api/getLyric', {
    mid,
  })
  const lyric_1 = result ? result.lyric : '[00:00:00]该歌曲暂时无法获取歌词'
  lyricMap[mid] = lyric_1
  return lyric_1
}
