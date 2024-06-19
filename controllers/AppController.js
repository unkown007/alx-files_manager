import rClient from '../utils/redis';
import dClient from '../utils/db';

export default class AppController {
  static getStatus(request, response) {
    response.status(200).json({
      redis: rClient.isAlive(),
      db: dClient.isAlive(),
    });
  }

  static getStats(request, response) {
    Promise.all([dClient.nbUsers(), dClient.nbFiles()])
      .then(([usersCount, filesCount]) => {
        response.status(200).json({ users: usersCount, files: filesCount });
      });
  }
}
