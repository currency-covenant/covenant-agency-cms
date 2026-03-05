import * as migration_20260305_082025 from './20260305_082025'

export const migrations = [
  {
    up: migration_20260305_082025.up,
    down: migration_20260305_082025.down,
    name: '20260305_082025',
  },
]
