using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using TrainingWebAPIService.Models;

namespace TrainingWebAPIService.Controllers
{
    public class TrainingController : ApiController
    {
        public IEnumerable<Training> Get()
        {
            using (TrainingDBEntities entities = new TrainingDBEntities())
            {
                return entities.Trainings.ToList();
            }
        }

        public Training Get(int id)
        {
            using (TrainingDBEntities entities = new TrainingDBEntities())
            {
                return entities.Trainings.FirstOrDefault(e => e.id == id);
            }
        }

    }
}
